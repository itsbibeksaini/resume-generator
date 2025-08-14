package com.experimentals.resume.generator.features.identity.data.responsemodels

import io.swagger.v3.oas.annotations.media.Schema

data class SignInResponse(
    @Schema(description = "Status message", example = "Account creation successfully")
    val message: String,

    @Schema(description = "ID related to operation", example = "Signin ID")
    val id: String? = ""
)
