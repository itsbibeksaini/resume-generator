package com.experimentals.resume.generator.configs.security

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.jwt.JwtDecoder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

/**
 * Utility component responsible for parsing and validating JWT tokens.
 *
 * This class abstracts away the JWT decoding logic, transforming a raw token string
 * into a Spring Security [UserDetails] object, ready for authentication.
 *
 * Responsibilities:
 * - Decode JWT using [JwtDecoder]
 * - Validate required claims (e.g., "name", "role")
 * - Convert claims into Spring Security's [UserDetails]
 * - Wrap low-level JWT parsing errors in a domain-specific [JwtTokenValidationException]
 *
 * Example:
 * ```
 * val userDetails = jwtTokenParser.parseToken(token)
 * ```
 *
 * @property jwtDecoder Spring Security's [JwtDecoder] for validating and decoding JWTs.
 * @throws JwtTokenValidationException If the token is invalid, expired, or missing required claims.
 */
@Component
class JwtTokenParser(
    private val jwtDecoder: JwtDecoder
) {
    fun parseToken(token: String): UserDetails {
        val jwt = jwtDecoder.decode(token)

        return User.withUsername(jwt.claims["name"].toString())
            .password("") // password not needed for JWT-authenticated users
            .authorities(jwt.claims["role"].toString())
            .accountExpired(false)
            .accountLocked(false)
            .credentialsExpired(false)
            .disabled(false)
            .build()
    }
}