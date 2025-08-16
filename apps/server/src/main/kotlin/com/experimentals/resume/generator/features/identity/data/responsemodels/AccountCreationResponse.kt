package com.experimentals.resume.generator.features.identity.data.responsemodels

import com.experimentals.resume.generator.apiresponse.ApiResponse


data class AccountCreationResponse(
    override val message: String,
) : ApiResponse(message)