package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.AccountCreationRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.AccountCreationResponse

interface AccountService {
    fun createAccount(accountCreationRequest: AccountCreationRequest): AccountCreationResponse
}