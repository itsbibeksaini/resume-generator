package com.experimentals.resume.generator.features.authentication.domain.repositories

import com.experimentals.resume.generator.features.authentication.data.entities.Account
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountRepository: MongoRepository<Account, ObjectId> {

    fun findByID(id: ObjectId): Account
}