package com.experimentals.resume.generator.features.authentication.data.entities

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import java.time.Instant

data class RefreshTokens(

    @Id
    val ID: ObjectId,
    val TOKEN: String,
    val LIFE_SPAN: Int,
    val DEVICE: String,
    val BROWSER: String,
    val OS: String,
    val IPV4: String,
    val SHA: String,
    val isActive: Boolean,
    val REFRESHED_ON: Instant,
//    val STATUS:
    val GENERATED_ON: String
)
