package com.experimentals.resume.generator.features.authentication.domain.repositories

import com.experimentals.resume.generator.features.authentication.data.entities.Credentials
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CredentialsRepository: MongoRepository<Credentials, ObjectId> {


}