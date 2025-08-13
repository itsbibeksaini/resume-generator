package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.entities.Account
import com.experimentals.resume.generator.features.identity.data.entities.Credentials
import com.experimentals.resume.generator.features.identity.data.requestmodels.AccountCreationRequest
import com.experimentals.resume.generator.features.identity.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.identity.domain.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.identity.utils.AuthUtils
import org.bson.types.ObjectId
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class AccountServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
): AccountService {
    override fun createAccount(accountCreationRequest: AccountCreationRequest): Boolean {
        val newAccount = Account(
            id = ObjectId(),
            fullName = accountCreationRequest.fullName,
            email = accountCreationRequest.email,
            locked = false,
            loginAttempts = 0,
            createdOn = Instant.now(),
            updatedOn = Instant.now()
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

        return true
    }

}