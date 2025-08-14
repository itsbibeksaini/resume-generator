package com.experimentals.resume.generator.exceptions

import org.springframework.core.MethodParameter
import org.springframework.http.HttpStatus
import org.springframework.validation.BindingResult
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(HttpStatus.BAD_REQUEST)
class ApiArgumentsNotValidException(
    methodParameter: MethodParameter,
    bindingResult: BindingResult,

) : MethodArgumentNotValidException(methodParameter, bindingResult) {
    val errors: Map<String, String> = bindingResult.fieldErrors.associate {
        ((it.field to it.defaultMessage) as Pair<String, String>)
    }
}