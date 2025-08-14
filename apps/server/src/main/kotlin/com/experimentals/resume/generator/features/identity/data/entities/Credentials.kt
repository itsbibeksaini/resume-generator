package com.experimentals.resume.generator.features.identity.data.entities

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.jetbrains.annotations.NotNull
import java.time.Instant

@Document("credentials")
data class Credentials (

    @Id
    val id: ObjectId?,

    @NotNull
    val accountId: ObjectId?,

    @NotNull
    val username: String?,

    @NotNull
    val secretHash: String? = "",

    @NotNull
    val salt: ByteArray? = byteArrayOf(),

    @NotNull
    val createdOn: Instant = Instant.now(),

    @NotNull
    val updatedOn: Instant = Instant.now(),

    @Transient
    val account: Account? = null
)