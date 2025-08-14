package com.experimentals.resume.generator.exceptions

import com.experimentals.resume.generator.apiresponse.ApiResponse
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(HttpStatus.FORBIDDEN)
class ApiForbiddenException(apiResponse: ApiResponse): ApiException(apiResponse) {
}