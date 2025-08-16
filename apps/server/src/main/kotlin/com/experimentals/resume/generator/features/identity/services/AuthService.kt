package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.SignInResponse
import org.bson.types.ObjectId

interface AuthService {

    fun signIn(signInRequest: SignInRequest): SignInResponse
    fun generateAccessToken(fullName: String, accountId: String): String
    fun generateRefreshToken(accountId: ObjectId): String
}