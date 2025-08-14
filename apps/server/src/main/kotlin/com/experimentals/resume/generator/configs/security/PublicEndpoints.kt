package com.experimentals.resume.generator.configs.security

class PublicEndpoints {
    companion object {
        val PUBLIC_ENDPOINTS: Array<String> = arrayOf(
            "/api/v1/account/create",
            "/api/v1/auth/signin",
            "/actuator/**",
            "/swagger-ui.html",
            "/swagger-ui/",
            "/swagger-ui/**",
            "/swagger-resources/**",
            "/*/api-docs/**"
        )
    }
}