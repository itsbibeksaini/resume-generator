package com.experimentals.resume.generator.configs


import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Contact
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.security.SecurityRequirement
import io.swagger.v3.oas.models.security.SecurityScheme
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.MongoDatabaseFactory
import org.springframework.data.mongodb.MongoTransactionManager
import org.springframework.transaction.annotation.EnableTransactionManagement

@Configuration
@EnableTransactionManagement
class BeanConfigs {

    @Bean
    fun transactionManager(factory: MongoDatabaseFactory) = MongoTransactionManager(factory)

    @Bean
    fun openApi() = OpenAPI().apply {

        // Add security requirement
        addSecurityItem(
            SecurityRequirement().apply {
                addList("Bearer Authentication")
            }
        )

        // Add security scheme
        components = Components().apply {
            addSecuritySchemes(
                "Bearer Authentication",
                SecurityScheme().apply {
                    type = SecurityScheme.Type.HTTP
                    scheme = "bearer"
                    bearerFormat = "JWT"
                }
            )
        }

        // Set API info
        info = Info().apply {
            title = "Resume Generator API"
            description = "An API to generate resumes in PDF format"
            version = "v0.0.1-SNAPSHOT"
            contact = Contact().apply {
                name = "Bibek Saini"
                email = "itsbibeksaini@gmail.com"
                url = "http://itsbibeksaini.com"
            }
        }
    }
}