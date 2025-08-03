package com.experimentals.resume.generator.features.authentication.services

import com.experimentals.resume.generator.features.authentication.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.authentication.domain.repositories.CredentialsRepository
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
) : AuthService {
    override fun signIn() {
        TODO("Not yet implemented")
    }

    override fun createAccount() {
        TODO("Not yet implemented")
    }

    override fun createCredentials() {
        TODO("Not yet implemented")
    }
}