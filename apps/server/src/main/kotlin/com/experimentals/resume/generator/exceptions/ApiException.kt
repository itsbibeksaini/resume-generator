package com.experimentals.resume.generator.exceptions

open class ApiException(
    override val message: String,
): RuntimeException(message)