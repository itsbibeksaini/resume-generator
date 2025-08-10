package com.experimentals.resume.generator.configs.filters

import com.experimentals.resume.generator.configs.security.JwtTokenParser
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

@Component
class JwtAuthenticationFilter(
    private val jwtTokenParser: JwtTokenParser
): OncePerRequestFilter() {

    private val excludedPaths: RequestMatcher = OrRequestMatcher(
        PathPatternRequestMatcher.pathPattern("/swagger-ui.html"),
        PathPatternRequestMatcher.pathPattern("/swagger-ui/**"),
        PathPatternRequestMatcher.pathPattern("/swagger-resources/**"),
        PathPatternRequestMatcher.pathPattern("/*/api-docs/**"),
        PathPatternRequestMatcher.pathPattern("/api/v1/auth")
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