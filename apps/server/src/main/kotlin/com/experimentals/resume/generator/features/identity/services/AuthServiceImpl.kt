package com.experimentals.resume.generator.features.identity.services

import com.experimentals.resume.generator.apiresponse.ErrorResponse
import com.experimentals.resume.generator.configs.properties.ResumeGeneratorProperties
import com.experimentals.resume.generator.exceptions.ApiForbiddenException
import com.experimentals.resume.generator.exceptions.ApiNotFoundException
import com.experimentals.resume.generator.exceptions.ApiUnauthorizedException
import com.experimentals.resume.generator.features.identity.data.entities.RefreshToken
import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.SignInResponse
import com.experimentals.resume.generator.features.identity.domain.auth.repositories.CredentialsRepository
import com.experimentals.resume.generator.features.identity.domain.refreshtoken.repositories.RefreshTokenRepository
import com.experimentals.resume.generator.features.identity.utils.AuthUtils
import org.bson.types.ObjectId
import org.springframework.security.oauth2.jwt.JwtClaimsSet
import org.springframework.security.oauth2.jwt.JwtEncoderParameters
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder
import org.springframework.stereotype.Service
import java.time.Instant
import java.time.temporal.ChronoUnit

@Service
class AuthServiceImpl(
    private val credentialsRepository: CredentialsRepository,
    private val refreshTokenRepository: RefreshTokenRepository,
    private val properties: ResumeGeneratorProperties,
    private val jwtEncoder: NimbusJwtEncoder
) : AuthService {
    override fun signIn(signInRequest: SignInRequest): SignInResponse {
        val userAccount = credentialsRepository.findUser(signInRequest.username)
        val response: SignInResponse
        userAccount?.let {
            // check account locked status
            if(userAccount.account?.locked == true)
                throw ApiForbiddenException(ErrorResponse("Account is locked. Please contact support or reset your password."))

            AuthUtils.createPasswordHash(signInRequest.password, userAccount.salt)
                .takeIf { it.hash == userAccount.secretHash }
                ?.also {
                    // create access and refresh token

                    response = SignInResponse(
                        "Password matched. Authentication successful.",
                        generateAccessToken("", userAccount.accountId.toString()),
                        generateRefreshToken(userAccount.accountId!!)
                    )
                }
                ?: run {
                    throw ApiUnauthorizedException(ErrorResponse("Password has been reset"))
                }
        } ?: run {
            throw ApiNotFoundException(ErrorResponse("User account not found."))
        }

        return response
    }

    override fun generateAccessToken(fullName: String, accountId: String): String {

        val token: String

        val instantNow = Instant.now()

        JwtClaimsSet.builder().apply {
            issuer(properties.jwtSecret.issuer)
            audience(listOf(properties.jwtSecret.audience))
            issuedAt(instantNow)
            expiresAt(instantNow.plus(properties.jwtSecret.ttl, ChronoUnit.MINUTES))
            subject(fullName)
            claim("account-id", "")
        }.build().let {
            token = jwtEncoder.encode(JwtEncoderParameters.from(it)).tokenValue
        }

        return token
    }

    override fun generateRefreshToken(accountId: ObjectId): String {

        // check if refresh token exist in db.
        // if not create new one

        val refreshToken = AuthUtils.generateRandomSecuredString()
        val instantNow = Instant.now()

//        refreshTokenRepository.save(RefreshToken(
//            ObjectId(),
//            accountId,
//            refreshToken,
//            1,
//            "","","","","",true,instantNow,instantNow
//        ))

        return refreshToken
    }


}