package com.experimentals.resume.generator.features.identity.data.responsemodels

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "Response model returned for account creation request.")
data class AccountCreationResponse(

    @Schema(description = "Status message", example = "Account creation successfully")
    val MESSAGE: String,

    @Schema(description = "ID related to operation", example = "Account ID")
    val ID: String? = ""
)