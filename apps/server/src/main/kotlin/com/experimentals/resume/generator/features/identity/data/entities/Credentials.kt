package com.experimentals.resume.generator.features.identity.data.entities

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.jetbrains.annotations.NotNull

@Document("credentials")
data class Credentials (

    @Id
    val ID: ObjectId?,

    @NotNull
    val ACCOUNT_ID: ObjectId?,

    @NotNull
    val USERNAME: String?,

    @NotNull
    val SECRET_HASH: String? = "",

    @NotNull
    val SALT: ByteArray? = byteArrayOf(),

    @Transient
    val ACCOUNT: Account? = null
)