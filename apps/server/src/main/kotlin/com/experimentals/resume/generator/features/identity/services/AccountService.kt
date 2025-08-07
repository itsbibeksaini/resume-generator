package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.CreateAccountRequest

interface AccountService {
    fun createAccount(createAccountRequest: CreateAccountRequest): Boolean
}