package com.experimentals.resume.generator.features.authentication.data.requestmodels

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern
import org.jetbrains.annotations.NotNull

data class SignInRequest(
    @NotNull
    @NotBlank
    @Pattern(regexp = "[a-zA-Z0-9_]+")
    val USERNAME: String,

    @NotNull
    @NotBlank
    val PASSWORD: String
)
