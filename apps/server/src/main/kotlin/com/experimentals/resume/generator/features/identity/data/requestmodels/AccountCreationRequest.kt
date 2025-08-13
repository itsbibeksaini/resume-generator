package com.experimentals.resume.generator.features.identity.data.requestmodels

import jakarta.validation.constraints.NotBlank

data class AccountCreationRequest(
    @NotBlank
    val USERNAME: String,

    @NotBlank
    val PASSWORD: String,

    @NotBlank
    val FULL_NAME: String,

    @NotBlank
    val EMAIL: String,
)
