package com.experimentals.resume.generator.configs.filters

import com.experimentals.resume.generator.configs.security.JwtTokenParser
import com.experimentals.resume.generator.configs.security.PublicEndpoints
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.jwt.JwtException
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher
import org.springframework.security.web.util.matcher.OrRequestMatcher
import org.springframework.security.web.util.matcher.RequestMatcher
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException
import kotlin.jvm.Throws

/**
 * Spring Security filter responsible for authenticating requests using JWT tokens.
 *
 * This filter intercepts each HTTP request, extracts the JWT from the Authorization header,
 * validates it via [JwtTokenParser], and if valid, places an authenticated
 * [UsernamePasswordAuthenticationToken] into the [SecurityContextHolder].
 *
 * Order: This filter should be registered *before* [UsernamePasswordAuthenticationFilter].
 *
 * Behavior:
 * - Skips filtering for whitelisted/public endpoints
 * - Extracts "Bearer" token from `Authorization` header
 * - Validates the token and loads [UserDetails]
 * - Populates Spring Security's context for downstream filters
 * - Sends HTTP 401 for invalid or expired tokens
 *
 * Example Authorization header:
 * ```
 * Authorization: Bearer eyJhbGciOi...
 * ```
 *
 * @property jwtTokenParser Component for parsing and validating JWT tokens.
 */
@Component
class JwtAuthenticationFilter(
    private val jwtTokenParser: JwtTokenParser
): OncePerRequestFilter() {

    // Endpoints that bypass JWT authentication
    private val excludedPaths: RequestMatcher = OrRequestMatcher(
        *PublicEndpoints.Companion.PUBLIC_ENDPOINTS.map { PathPatternRequestMatcher.pathPattern(it) }.toTypedArray()
    )

    override fun shouldNotFilter(request: HttpServletRequest): Boolean {
        return excludedPaths.matches(request)
    }

    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val authorizationHeader = request.getHeader("Authorization")

        if (!authorizationHeader.startsWith("Bearer ")) {
//            logger.debug("Authorization header does not start with Bearer")
            filterChain.doFilter(request, response)
            return
        }

        val token = authorizationHeader.removePrefix("Bearer ").trim()

        runCatching {
            jwtTokenParser.parseToken(token)
        }
            .onSuccess {
                if(SecurityContextHolder.getContext().authentication == null) {
                    val authentication = UsernamePasswordAuthenticationToken(
                        it,null, it.authorities
                    ).apply {
                        details = WebAuthenticationDetailsSource().buildDetails(request)
                    }
                }
                filterChain.doFilter(request, response)
            }
            .onFailure {
                when(it){
                    is JwtException, is IllegalArgumentException ->{
                        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid or expired JWT token")
                    }
                    else -> {
                        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Authentication failed")
                    }
                }
            }
    }
}