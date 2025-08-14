package com.experimentals.resume.generator.features.identity.data.entities

import org.bson.types.ObjectId
import org.jetbrains.annotations.NotNull
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant

@Document("account")
data class Account(
    @Id
    val id: ObjectId,
    @NotNull
    val fullName: String,
    @NotNull
    val email: String,

    @NotNull
    val locked: Boolean = false,
    @NotNull
    val loginAttempts: Int = 0,

    @NotNull
    val createdOn: Instant,
    @NotNull
    val updatedOn: Instant
)