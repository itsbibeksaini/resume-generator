package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.SignInResponse

interface AuthService {

    fun signIn(signInRequest: SignInRequest): SignInResponse
}