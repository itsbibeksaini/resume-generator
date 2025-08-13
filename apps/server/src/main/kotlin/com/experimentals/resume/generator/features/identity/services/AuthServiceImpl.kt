package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.identity.domain.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.identity.utils.AuthUtils
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl(
    private val accountRepository: AccountRepository,
    private val credentialsRepository: CredentialsRepository
) : AuthService {
    override fun signIn(signInRequest: SignInRequest) {
        val userAccount = credentialsRepository.findUser(signInRequest.username)
        if(userAccount == null) {
            // return from here no user found.
        }

        // check password and lock status.
        AuthUtils.createPasswordHash(signInRequest.password, userAccount?.salt)
            .takeIf {
                val isAccountLocked = userAccount?.account?.locked ?: false
                it.hash == userAccount?.secretHash && !isAccountLocked
            }
            ?.also {
                print("MATCHED")
            }
            ?: run {
                // return from here password mismatch.
                print("Password mismatch or account is locked.")
                // takes care of account is null(not found)
            }
        // rest lock attempts if it is successful login.
    }
}