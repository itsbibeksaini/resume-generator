package com.experimentals.resume.generator.features.identity.data.requestmodels

import com.fasterxml.jackson.annotation.JsonCreator
import jakarta.validation.constraints.NotBlank

data class SignInRequest @JsonCreator constructor (
    @NotBlank
//    @Pattern(regexp = "[a-zA-Z0-9_]+")
    val username: String,

    @NotBlank
    val password: String
)
