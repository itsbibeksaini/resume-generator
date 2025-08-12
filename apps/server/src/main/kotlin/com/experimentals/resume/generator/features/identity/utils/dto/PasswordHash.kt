package com.experimentals.resume.generator.features.identity.utils.dto

import jakarta.validation.constraints.NotBlank

data class PasswordHash(
    @NotBlank
    val HASH: String,

    @NotBlank
    val SALT: ByteArray,
)
