package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.apiresponse.ApiResponse
import com.experimentals.resume.generator.exceptions.ApiConflictException
import com.experimentals.resume.generator.features.identity.data.entities.Account
import com.experimentals.resume.generator.features.identity.data.entities.Credentials
import com.experimentals.resume.generator.features.identity.data.requestmodels.AccountCreationRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.AccountCreationResponse
import com.experimentals.resume.generator.features.identity.domain.account.repositories.AccountRepository
import com.experimentals.resume.generator.features.identity.domain.auth.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.identity.utils.AuthUtils
import org.bson.types.ObjectId
import org.springframework.stereotype.Service

@Service
class AccountServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
): AccountService {
    override fun createAccount(accountCreationRequest: AccountCreationRequest): AccountCreationResponse {

        credentialsRepository.findAnyByUsername(accountCreationRequest.username)?.let {
            throw ApiConflictException(ApiResponse(message = "Username already exists."))
        }

        accountRepository.findByEmail(accountCreationRequest.email)?.let {
            throw ApiConflictException(ApiResponse(message = "Email already exists."))
        }

        val newAccount = Account(
            id = ObjectId(),
            fullName = accountCreationRequest.fullName,
            email = accountCreationRequest.email,
            locked = false,
            loginAttempts = 0
        )

        accountRepository.save(newAccount)

        val passwordHash = AuthUtils.createPasswordHash(accountCreationRequest.password, null)

        val newCredentials = Credentials(
            id = ObjectId(),
            accountId = newAccount.id,
            username = accountCreationRequest.username,
            secretHash = passwordHash.hash,
            salt = passwordHash.salt
        )

        credentialsRepository.save(newCredentials)

        return AccountCreationResponse("Account created successfully.")
    }

}