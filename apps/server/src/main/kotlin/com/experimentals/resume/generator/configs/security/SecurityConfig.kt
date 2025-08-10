package com.experimentals.resume.generator.configs.security

import com.experimentals.resume.generator.configs.filters.JwtAuthenticationFilter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
class SecurityConfig(
    private val restAuthenticationEntryPoint: RestAuthenticationEntryPoint,
    private val jwtAuthenticationFilter: JwtAuthenticationFilter
) {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {

        http
            .csrf{ it.disable() }
            .formLogin { it.disable() }
            .httpBasic { it.disable() }
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
            .exceptionHandling { it.authenticationEntryPoint(restAuthenticationEntryPoint) }
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter::class.java)
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

        return http.build()
    }
}