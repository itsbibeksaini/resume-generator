package com.experimentals.resume.generator.exceptions

import com.experimentals.resume.generator.apiresponse.ApiResponse

open class ApiException(
    apiResponse: ApiResponse
): RuntimeException(apiResponse.message)