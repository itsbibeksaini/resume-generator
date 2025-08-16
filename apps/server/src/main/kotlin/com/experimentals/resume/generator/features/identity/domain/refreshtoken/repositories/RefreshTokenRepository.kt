package com.experimentals.resume.generator.features.identity.domain.refreshtoken.repositories

import com.experimentals.resume.generator.features.identity.data.entities.Account
import com.experimentals.resume.generator.features.identity.data.entities.RefreshToken
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface RefreshTokenRepository: MongoRepository<RefreshToken, ObjectId>