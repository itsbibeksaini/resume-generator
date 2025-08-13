package com.experimentals.resume.generator.features.identity.data.requestmodels

import jakarta.validation.constraints.NotBlank

data class AccountCreationRequest(
    @NotBlank
    val username: String,

    @NotBlank
    val password: String,

    @NotBlank
    val fullName: String,

    @NotBlank
    val email: String,
)
