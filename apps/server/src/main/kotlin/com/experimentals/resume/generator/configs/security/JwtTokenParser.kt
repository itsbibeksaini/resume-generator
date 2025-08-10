package com.experimentals.resume.generator.configs.security

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.jwt.JwtDecoder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

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