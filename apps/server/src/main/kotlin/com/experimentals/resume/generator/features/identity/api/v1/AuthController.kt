package com.experimentals.resume.generator.features.identity.api.v1

import com.experimentals.resume.generator.features.identity.data.requestmodels.SignInRequest
import com.experimentals.resume.generator.features.identity.services.AuthService
import jakarta.annotation.security.PermitAll
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/signin")
    fun signIn(@RequestBody signInRequest: SignInRequest): ResponseEntity<String> {
        authService.signIn(signInRequest)
        return ResponseEntity.ok("Hello, ${signInRequest.username}!")
    }
}