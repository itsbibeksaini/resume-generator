package com.experimentals.resume.generator.configs

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {

    @Bean
    fun filterChain(http:HttpSecurity): SecurityFilterChain {

        http
            .csrf{ it.disable() }
            .formLogin { it.disable() }
            .httpBasic { it.disable() }
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
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