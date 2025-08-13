package com.experimentals.resume.generator.apiresponse

open class ApiResponse(
    open val message: String,
    open val timestamp: String = java.time.Instant.now().toString()
)

