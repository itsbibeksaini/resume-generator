package com.experimentals.resume.generator.features.identity.api.v1

import com.experimentals.resume.generator.features.identity.data.requestmodels.AccountCreationRequest
import com.experimentals.resume.generator.features.identity.data.responsemodels.AccountCreationResponse
import com.experimentals.resume.generator.features.identity.services.AccountService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/account")
@Tag(
    name = "Account Controller",
    description = "REST endpoint for account related requests."
)
class AccountController(
    private val accountService: AccountService
) {

    @PostMapping("/create")
    @Operation(
        summary = "An endpoint for registering new account in system."
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "201",
                description = "Account created successfully",
                content = [
                    Content(
                        schema = Schema(implementation = AccountCreationResponse::class)
                    )
                ]
            ),
        ]
    )
    fun createAccount(@RequestBody accountCreationRequest: AccountCreationRequest): ResponseEntity<AccountCreationResponse> {
        val isSuccess = accountService.createAccount(accountCreationRequest)

        if (!isSuccess) {
            return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(AccountCreationResponse(
                    message = "Account created successfully."
                ))
        }

        return TODO("Provide the return value")
    }

    @GetMapping("/test")
    fun test(): String{
        return "Endpoints working"
    }
}