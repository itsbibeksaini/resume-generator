package com.experimentals.resume.generator.features.identity.domain.account.repositories

import com.experimentals.resume.generator.features.identity.data.entities.Account
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountRepository: MongoRepository<Account, ObjectId> {

//    fun findById(id: ObjectId): Account

    fun findByEmail(email: String): Account?
}