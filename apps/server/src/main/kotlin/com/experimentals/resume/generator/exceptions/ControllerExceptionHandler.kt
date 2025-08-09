package com.experimentals.resume.generator.exceptions

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ControllerExceptionHandler {

    @ExceptionHandler(ApiUnauthorizedException::class)
    fun apiUnauthorized(exception: ApiUnauthorizedException): ResponseEntity<String>{
        return ResponseEntity(exception.message, HttpStatus.UNAUTHORIZED)
    }

    @ExceptionHandler(ApiForbiddenException::class)
    fun apiForbidden(exception: ApiForbiddenException): ResponseEntity<String> {
        return ResponseEntity(exception.message, HttpStatus.FORBIDDEN)
    }
}