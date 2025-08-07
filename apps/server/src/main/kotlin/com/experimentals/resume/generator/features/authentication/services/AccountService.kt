package com.experimentals.resume.generator.features.authentication.services

import com.experimentals.resume.generator.features.authentication.data.requestmodels.CreateAccountRequest

interface AccountService {
    fun createAccount(createAccountRequest: CreateAccountRequest): Boolean
}