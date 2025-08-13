package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest

interface AuthService {

    fun signIn(signInRequest: SignInRequest)
}