package com.experimentals.resume.generator.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(HttpStatus.FORBIDDEN)
class ApiForbiddenException(message: String): ApiException(message) {
}