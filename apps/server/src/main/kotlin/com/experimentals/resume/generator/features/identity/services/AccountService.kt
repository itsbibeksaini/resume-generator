package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.AccountCreationRequest

interface AccountService {
    fun createAccount(accountCreationRequest: AccountCreationRequest): Boolean
}