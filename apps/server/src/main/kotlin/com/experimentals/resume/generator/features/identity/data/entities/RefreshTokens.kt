package com.experimentals.resume.generator.features.identity.data.entities

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import java.time.Instant

data class RefreshTokens(

    @Id
    val id: ObjectId,
    val token: String,
    val lifeSpan: Int,
    val device: String,
    val browser: String,
    val os: String,
    val ipv4: String,
    val sha: String,
    val isActive: Boolean,
    val refreshedOn: Instant,
//    val STATUS:
    val generatedOn: String
)
