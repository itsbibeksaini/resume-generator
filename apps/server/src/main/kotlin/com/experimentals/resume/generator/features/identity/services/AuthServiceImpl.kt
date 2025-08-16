package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.apiresponse.ApiResponse
import com.experimentals.resume.generator.apiresponse.ErrorResponse
import com.experimentals.resume.generator.exceptions.ApiForbiddenException
import com.experimentals.resume.generator.exceptions.ApiNotFoundException
import com.experimentals.resume.generator.exceptions.ApiUnauthorizedException
import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.SignInResponse
import com.experimentals.resume.generator.features.identity.domain.repositories.AccountRepository
import com.experimentals.resume.generator.features.identity.domain.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.identity.utils.AuthUtils
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl(
    private val credentialsRepository: CredentialsRepository
) : AuthService {
    override fun signIn(signInRequest: SignInRequest): SignInResponse {
        val userAccount = credentialsRepository.findUser(signInRequest.username)
        val response: SignInResponse
        userAccount?.let {
            // check account locked status
            if(userAccount.account?.locked == true)
                throw ApiForbiddenException(ErrorResponse("Account is locked. Please contact support or reset your password."))

            AuthUtils.createPasswordHash(signInRequest.password, userAccount?.salt)
                .takeIf { it.hash == userAccount.secretHash }
                ?.also { response = SignInResponse("Password matched. Authentication successful.") }
                ?: run {
                    throw ApiUnauthorizedException(ErrorResponse("Password has been reset"))
                }
        } ?: run {
            throw ApiNotFoundException(ErrorResponse("User account not found."))
        }

        return response
    }
}