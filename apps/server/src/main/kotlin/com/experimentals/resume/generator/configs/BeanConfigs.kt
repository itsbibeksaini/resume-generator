package com.experimentals.resume.generator.configs

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.MongoDatabaseFactory
import org.springframework.data.mongodb.MongoTransactionManager
import org.springframework.transaction.annotation.EnableTransactionManagement

@Configuration
@EnableTransactionManagement
class BeanConfigs {

    @Bean
    fun transactionManager(factory: MongoDatabaseFactory): MongoTransactionManager {
        return MongoTransactionManager(factory)
    }
}