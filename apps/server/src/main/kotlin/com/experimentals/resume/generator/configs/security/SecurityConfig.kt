package com.experimentals.resume.generator.configs.security

import com.experimentals.resume.generator.configs.filters.JwtAuthenticationFilter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val restAuthenticationEntryPoint: RestAuthenticationEntryPoint,
    private val jwtAuthenticationFilter: JwtAuthenticationFilter
) {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {

        http
            /**
             * 1. Disable default authentication mechanisms not needed for stateless JWT-based APIs.
             *
             * - CSRF: Not required for stateless REST APIs (only relevant for browser sessions)
             * - Form Login: Disabled, as login is handled via JWT auth endpoints
             * - HTTP Basic: Disabled to avoid sending credentials with every request
             */
            .csrf{ it.disable() }
            .formLogin { it.disable() }
            .httpBasic { it.disable() }
            /**
             * 2. Configure session management
             *
             * Stateless policy ensures Spring Security never creates or uses an HTTP session.
             * Every request must include a valid JWT for authentication.
             */
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
            /**
             * 3. Global authentication failure handler
             *
             * If authentication fails at any point, the RestAuthenticationEntryPoint
             * will return a structured JSON response with HTTP 401 status
             * instead of redirecting to a login page.
             */
            .exceptionHandling { it.authenticationEntryPoint(restAuthenticationEntryPoint) }
            /**
             * 4. Add custom JWT authentication filter
             *
             * The filter intercepts requests before UsernamePasswordAuthenticationFilter,
             * extracting and validating the JWT from the Authorization header.
             */
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter::class.java)
            /**
             * 5. Authorization rules
             *
             * - Public endpoints (whitelisted) are accessible without authentication
             * - All other endpoints require a valid JWT
             *
             * Order matters: more specific patterns should come before generic rules.
             */
            .authorizeHttpRequests{
                it.requestMatchers(
                    "/api/v1/account/test",
                            "/actuator/**",
                    "/swagger-ui.html",
                    "/swagger-ui/",
                    "/swagger-ui/**",
                    "/swagger-resources/**",
                    "/*/api-docs/**"
                ).permitAll()
                    .anyRequest().authenticated()
            }

        /**
         * The configured HttpSecurity is built into a SecurityFilterChain bean
         * used by Spring Security's filter infrastructure.
         */
        return http.build()
    }
}