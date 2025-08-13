package com.experimentals.resume.generator.features.identity.data.requestmodels

import jakarta.validation.constraints.NotBlank

data class SignInRequest(
    @NotBlank
//    @Pattern(regexp = "[a-zA-Z0-9_]+")
    val username: String,

    @NotBlank
    val password: String
)
