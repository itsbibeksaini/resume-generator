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
            ID = ObjectId(),
            FULL_NAME = accountCreationRequest.FULL_NAME,
            EMAIL = accountCreationRequest.EMAIL,
            LOCKED = false,
            LOGIN_ATTEMPTS = 0,
            CREATED_ON = Instant.now(),
            UPDATED_ON = Instant.now()
        )

        accountRepository.save(newAccount)

        val passwordHash = AuthUtils.createPasswordHash(accountCreationRequest.PASSWORD, null)

        val newCredentials = Credentials(
            ID = ObjectId(),
            ACCOUNT_ID = newAccount.ID,
            USERNAME = accountCreationRequest.USERNAME,
            SECRET_HASH = passwordHash.HASH,
            SALT = passwordHash.SALT
        )

        credentialsRepository.save(newCredentials)

        return true
    }

}