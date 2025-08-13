package com.experimentals.resume.generator.features.identity.domain.repositories

import com.experimentals.resume.generator.features.identity.data.entities.Credentials
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.Aggregation
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CredentialsRepository: MongoRepository<Credentials, ObjectId> {


    @Aggregation(pipeline = [
        $$"{$match: {USERNAME: ?0}}",
        $$"{ '$lookup': " +
                "{ 'from': 'account', " +
                "   'localField': 'PROFILE_ID', " +
                "   'foreignField': '_id', " +
                "   'as': 'account' } }",
        $$"{$unwind:  {path: $account, preserveNullAndEmptyArrays: true}}",

    ])
    fun findUser(username: String?): Credentials?

}