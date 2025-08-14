package com.experimentals.resume.generator.features.identity.data.entities

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.jetbrains.annotations.NotNull

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

    @Transient
    val account: Account? = null
)