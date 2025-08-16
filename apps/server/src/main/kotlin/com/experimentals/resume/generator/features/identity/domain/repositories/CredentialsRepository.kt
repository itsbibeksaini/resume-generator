package com.experimentals.resume.generator.features.identity.domain.repositories

import com.experimentals.resume.generator.features.identity.data.entities.Credentials
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.Aggregation
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CredentialsRepository: MongoRepository<Credentials, ObjectId> {


    @Aggregation(pipeline = [
        $$"{$match: {username: ?0}}",
        $$"{ '$lookup': " +
                "{ 'from': 'account', " +
                "   'localField': 'account_id', " +
                "   'foreignField': '_id', " +
                "   'as': 'account' } }",
        $$"{$unwind:  {path: $account, preserveNullAndEmptyArrays: true}}",

    ])
    fun findUser(username: String?): Credentials?

    fun findAnyByUsername(username: String?): Credentials?

}