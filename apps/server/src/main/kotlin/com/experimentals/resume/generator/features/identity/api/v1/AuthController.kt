package com.experimentals.resume.generator.features.identity.api.v1

import com.experimentals.resume.generator.features.identity.services.AuthService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/signin")
    fun signIn(){
        authService.signIn(username = "exampleUser")
    }
}