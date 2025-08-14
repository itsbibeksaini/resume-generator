package com.experimentals.resume.generator.features.identity.data.requestmodels

import com.fasterxml.jackson.annotation.JsonCreator
import io.swagger.v3.oas.annotations.media.Schema
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern

data class AccountCreationRequest @JsonCreator constructor(
    @Schema(
        description = "Username for the account.",
        example = "john_doe",
        pattern = "^\\S{5,}$"
    )
    @field: Pattern(regexp = "^\\S{5,}$")
    @field: NotBlank
    val username: String,

    @Schema(
        description = "Password for the account.",
        example = "Myp@ssw0rd!",
        pattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$"
    )
    @field:Pattern(
        regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$",
        message = "Password must be at least 8 characters long and contain uppercase, lowercase, digit, and special character"
    )
    @field:NotBlank
    val password: String,

    @Schema(
        description = "Full name of the user.",
        example = "John Doe"
    )
    @field:NotBlank
    val fullName: String,

    @Schema(
        description = "Email address",
        example = "abc@example.com",
        pattern = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
    )
    @field:NotBlank
    @field:Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")
    val email: String,
)
