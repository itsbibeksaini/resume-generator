package com.experimentals.resume.generator.features.authentication.services

import com.experimentals.resume.generator.features.authentication.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.authentication.domain.repositories.CredentialsRepository
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
) : AuthService {
    override fun signIn(username: String) {
        val useraccount = credentialsRepository.findUser("")
        if(useraccount == null) {
            // return from here no user found.
        }

        // check password and lock status.
        // rest lock attempts if it is successful login.
    }
}