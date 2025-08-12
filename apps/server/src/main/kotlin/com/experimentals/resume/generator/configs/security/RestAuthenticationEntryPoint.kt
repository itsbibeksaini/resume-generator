package com.experimentals.resume.generator.configs.security

import com.fasterxml.jackson.databind.ObjectMapper
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.MediaType
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.AuthenticationEntryPoint
import org.springframework.stereotype.Component

/**
 * Authentication entry point for REST APIs.
 *
 * This component is invoked when an unauthenticated client attempts
 * to access a protected resource. It responds with a JSON-formatted
 * [ErrorResponse] instead of redirecting to a login page (which is the
 * default Spring Security behavior for browser-based clients).
 *
 * This implementation is stateless and designed for APIs that use
 * token-based authentication (e.g., JWT, OAuth2).
 */
@Component
class RestAuthenticationEntryPoint: AuthenticationEntryPoint {

    private val objectMapper = ObjectMapper()

    /**
     * Handles authentication failure by sending a 401 Unauthorized JSON response.
     *
     * @param request The incoming HTTP request.
     * @param response The HTTP response object to be written to.
     * @param authException The authentication exception that triggered this entry point.
     */
    override fun commence(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authException: AuthenticationException
    ) {
        response.apply {
            contentType = MediaType.APPLICATION_JSON_VALUE
            characterEncoding = "UTF-8"
            status = HttpServletResponse.SC_UNAUTHORIZED
            writer.write(
                objectMapper.writeValueAsString(ErrorResponse(
                    status = HttpServletResponse.SC_UNAUTHORIZED,
                    error = "Unauthorized",
                    message = authException.message ?: "Authentication required",
                    path = request.requestURI
                ))
            )
        }
    }
}