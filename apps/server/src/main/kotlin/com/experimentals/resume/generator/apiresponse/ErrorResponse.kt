package com.experimentals.resume.generator.apiresponse

data class ErrorResponse(
    override val message: String?,
    val errors: Map<String, String>? = null
): ApiResponse(message)