package com.experimentals.resume.generator.features.authentication.services

import com.experimentals.resume.generator.features.authentication.data.entities.Account
import com.experimentals.resume.generator.features.authentication.data.entities.Credentials
import com.experimentals.resume.generator.features.authentication.data.requestmodels.CreateAccountRequest
import com.experimentals.resume.generator.features.authentication.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.authentication.domain.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.authentication.utils.AuthUtils
import org.bson.types.ObjectId
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class AccountServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
): AccountService {
    override fun createAccount(createAccountRequest: CreateAccountRequest): Boolean {
        val newAccount = Account(
            ID = ObjectId(),
            FULL_NAME = createAccountRequest.fullName,
            EMAIL = createAccountRequest.email,
            LOCKED = false,
            LOGIN_ATTEMPTS = 0,
            CREATED_ON = Instant.now(),
            UPDATED_ON = Instant.now()
        )

        accountRepository.save(newAccount)

        val passwordHash = AuthUtils.createPasswordHash("", null)

        val newCewdentials = Credentials(
            ID = ObjectId(),
            ACCOUNT_ID = newAccount.ID,
            USERNAME = createAccountRequest.username,
            SECRET_HASH = passwordHash.HASH,
            SALT = passwordHash.SALT
        )

        credentialsRepository.save(newCewdentials)

        return true
    }

}