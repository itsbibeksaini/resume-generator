package com.experimentals.resume.generator.exceptions

import com.experimentals.resume.generator.apiresponse.ApiResponse
import com.experimentals.resume.generator.apiresponse.ErrorResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ControllerExceptionHandler {

    @ExceptionHandler(ApiUnauthorizedException::class)
    fun apiUnauthorized(exception: ApiUnauthorizedException): ResponseEntity<ErrorResponse>{
        return ResponseEntity(ErrorResponse(exception.message), HttpStatus.UNAUTHORIZED)
    }

    @ExceptionHandler(ApiForbiddenException::class)
    fun apiForbidden(exception: ApiForbiddenException): ResponseEntity<String> {
        return ResponseEntity(exception.message, HttpStatus.FORBIDDEN)
    }

    @ExceptionHandler(ApiConflictException::class)
    fun apiConflict(exception: ApiConflictException): ResponseEntity<ApiResponse> {
        return ResponseEntity(ApiResponse(exception.message), HttpStatus.CONFLICT)
    }

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationExceptions(ex: MethodArgumentNotValidException): ResponseEntity<ApiResponse> {
        val errors = ex.bindingResult.fieldErrors.associate { it.field to it.defaultMessage }
        return ResponseEntity(
            ApiResponse(
                message = "Validation failed $errors",
            ),
            HttpStatus.BAD_REQUEST
        )
    }

    @ExceptionHandler(ApiArgumentsNotValidException::class)
    fun apiArgumentsNotValid(exception: ApiArgumentsNotValidException): ResponseEntity<ErrorResponse> {
        return ResponseEntity(
            ErrorResponse(
                message = "Validation failed",
                errors = exception.errors
            ),
            HttpStatus.BAD_REQUEST,
        )
    }

    @ExceptionHandler(ApiNotFoundException::class)
    fun apiNotFound(exception: ApiNotFoundException): ResponseEntity<ErrorResponse> = ResponseEntity(ErrorResponse(exception.message), HttpStatus.NOT_FOUND)
}