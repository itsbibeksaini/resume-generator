package com.experimentals.resume.generator.configs.properties

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "resume-regenerator")
data class ResumeGeneratorProperties(
    val jwtSecret: JwtSecret
)
