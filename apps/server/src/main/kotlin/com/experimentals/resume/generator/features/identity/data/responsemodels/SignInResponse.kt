package com.experimentals.resume.generator.features.identity.data.responsemodels

import com.experimentals.resume.generator.apiresponse.ApiResponse
import io.swagger.v3.oas.annotations.media.Schema

data class SignInResponse(
    override val message: String,
    val accessToken: String,
    val refreshToken: String
): ApiResponse(message)
