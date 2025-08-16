package com.experimentals.resume.generator.features.identity.data.entities

import jakarta.validation.constraints.NotBlank
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import java.time.Instant

data class RefreshToken(

    @Id
    val id: ObjectId,
    @NotBlank
    val accountId: ObjectId,
    @NotBlank
    val token: String,
    @NotBlank
    val lifeSpan: Int,
    @NotBlank
    val device: String,
    @NotBlank
    val browser: String,
    @NotBlank
    val os: String,
    @NotBlank
    val ipv4: String,
    @NotBlank
    val sha: String,
    @NotBlank
    val isActive: Boolean,
    @NotBlank
    val refreshedOn: Instant,
//    val STATUS:
    @NotBlank
    val generatedOn: Instant
)
