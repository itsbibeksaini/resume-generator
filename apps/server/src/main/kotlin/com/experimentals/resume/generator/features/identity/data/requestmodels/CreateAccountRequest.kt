package com.experimentals.resume.generator.features.identity.data.requestmodels

import jakarta.validation.constraints.NotBlank

data class CreateAccountRequest(
    @NotBlank
    val username: String,

    @NotBlank
    val password: String,

    @NotBlank
    val fullName: String,

    @NotBlank
    val email: String,
)
