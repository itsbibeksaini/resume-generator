package com.experimentals.resume.generator.features.authentication.data.entities

import org.bson.types.ObjectId
import org.jetbrains.annotations.NotNull
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant

@Document("account")
data class Account(
    @Id
    val ID: ObjectId,
    @NotNull
    val NAME: String,
    @NotNull
    val EMAIL: String,

    @NotNull
    val credentials: Credentials,

    @NotNull
    val LOCKED: Boolean = false,
    @NotNull
    val LOGIN_ATTEMPTS: Int = 0,

    @NotNull
    val CREATED_ON: Instant,
    @NotNull
    val UPDATED_ON: Instant
)