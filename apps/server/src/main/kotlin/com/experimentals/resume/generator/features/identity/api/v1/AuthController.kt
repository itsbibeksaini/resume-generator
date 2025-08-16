package com.experimentals.resume.generator.features.identity.api.v1

import com.experimentals.resume.generator.apiresponse.ErrorResponse
import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.SignInResponse
import com.experimentals.resume.generator.features.identity.services.AuthService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import jakarta.annotation.security.PermitAll
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
@Tag(
    name = "Authentication Controller",
    description = "REST endpoint for authentication into system."
)
class AuthController(private val authService: AuthService) {

    @PostMapping("/signin")
    @Operation(
        summary = "An endpoint for authentication into system."
    )
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "Authentication successful. Returns an access token.",
                content = [
                    Content(schema = Schema(implementation = SignInResponse::class))
                ]),
            ApiResponse(responseCode = "401", description = "Authentication failed. The provided credentials are invalid or incorrect.",
                content = [
                    Content(schema = Schema(implementation = ErrorResponse::class))
                ]),
            ApiResponse(responseCode = "403", description = "Access denied. The user account exists but is locked.",
                content = [
                    Content(schema = Schema(implementation = ErrorResponse::class))
                ]),
            ApiResponse(responseCode = "404", description = "Resource not found. No user account exists for the provided identifier.",
                content = [
                    Content(schema = Schema(implementation = ErrorResponse::class))
                ])
        ]
    )
    fun signIn(@RequestBody signInRequest: SignInRequest): ResponseEntity<SignInResponse> {
        return ResponseEntity.ok(authService.signIn(signInRequest))
    }
}