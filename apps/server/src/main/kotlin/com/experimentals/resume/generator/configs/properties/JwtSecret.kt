package com.experimentals.resume.generator.configs.properties

import jakarta.validation.constraints.NotBlank

data class JwtSecret(
    @NotBlank
    private val publicKey: String,

    @NotBlank
    private val privateKey: String,

    @NotBlank
    val issuer: String,

    @NotBlank
    val audience: String,

    @field:NotBlank
    val ttl: Long
){
    val _publicKey: String
        get() = test(publicKey, "PUBLIC")

    val _privateKey: String
        get() = test(privateKey, "PRIVATE")

    fun test(pem: String, keyType: String): String {
        val cleanPem = pem
            .replace("-----BEGIN $keyType KEY-----", "")
            .replace("-----END $keyType KEY-----", "")
            .replace("\\s".toRegex(), "")

        return cleanPem
    }
}
