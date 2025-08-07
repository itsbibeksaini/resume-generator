package com.experimentals.resume.generator.features.identity.api.v1

import com.experimentals.resume.generator.features.identity.data.requestmodels.CreateAccountRequest
import com.experimentals.resume.generator.features.identity.services.AccountService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/accounts")
class AccountController(
    private val accountService: AccountService
) {

    @PostMapping("/create")
    fun createAccount(createAccountRequest: CreateAccountRequest): ResponseEntity<Map<String, String>> {
        val isSuccess = accountService.createAccount(createAccountRequest)

        if (!isSuccess) {
            return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(mapOf("message" to "Account created successfully"))
        }

        return TODO("Provide the return value")
    }
}