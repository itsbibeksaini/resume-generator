package com.experimentals.resume.generator.features.identity.data.requestmodels

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern
import org.jetbrains.annotations.NotNull

data class SignInRequest(
    @NotBlank
//    @Pattern(regexp = "[a-zA-Z0-9_]+")
    val USERNAME: String,

    @NotBlank
    val PASSWORD: String
)
