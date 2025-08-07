package com.experimentals.resume.generator.features.identity.data.responsemodels

import io.swagger.v3.oas.annotations.media.Schema

data class AccountCreationResponse(

    @Schema(description = "Status message", example = "Account creation successfully")
    val MESSAGE: String,

    @Schema(description = "ID related to operation", example = "Account ID")
    val ID: String? = ""
)