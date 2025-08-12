package com.experimentals.resume.generator.configs


import com.experimentals.resume.generator.configs.properties.ResumeGeneratorProperties
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import com.nimbusds.jose.jwk.JWKSet
import com.nimbusds.jose.jwk.RSAKey
import com.nimbusds.jose.jwk.source.ImmutableJWKSet
import com.nimbusds.jose.proc.SecurityContext
import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Contact
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.security.SecurityRequirement
import io.swagger.v3.oas.models.security.SecurityScheme
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.MongoDatabaseFactory
import org.springframework.data.mongodb.MongoTransactionManager
import org.springframework.security.oauth2.jwt.JwtDecoder
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder
import org.springframework.transaction.annotation.EnableTransactionManagement
import java.security.KeyFactory
import java.security.interfaces.RSAPrivateKey
import java.security.interfaces.RSAPublicKey
import java.security.spec.PKCS8EncodedKeySpec
import java.security.spec.X509EncodedKeySpec
import java.util.Base64

@Configuration
@EnableTransactionManagement
@ConfigurationPropertiesScan
class BeanConfigs(
    private val properties: ResumeGeneratorProperties
) {

    /**
     * Configures the MongoDB transaction manager.
     *
     * @param factory The MongoDatabaseFactory to create transactions for MongoDB.
     * @return A MongoTransactionManager bean.
     */
    @Bean
    fun transactionManager(factory: MongoDatabaseFactory) = MongoTransactionManager(factory)

    /**
     * Configures the OpenAPI documentation details.
     *
     * Defines API info, contact, and security schemes for Swagger UI.
     *
     * @return OpenAPI bean with security and info metadata.
     */
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
                url = "https://itsbibeksaini.com"
            }
        }
    }

    /**
     * Configures the JWT Encoder with RSA public and private keys.
     *
     * Uses the provided keys to create an RSA JWK and returns a NimbusJwtEncoder.
     *
     * @return JwtEncoder bean for signing JWT tokens.
     */
    @Bean
    fun jwtEncoder() = KeyFactory.getInstance("RSA").let { keyFactory ->

        val rsaPublicKey = properties.jwtSecret._publicKey
            .let(Base64.getDecoder()::decode)
            .let(::X509EncodedKeySpec)
            .let(keyFactory::generatePublic) as RSAPublicKey

        val rsaPrivateKey = properties.jwtSecret._privateKey
            .let(Base64.getDecoder()::decode)
            .let(::PKCS8EncodedKeySpec)
            .let(keyFactory::generatePrivate) as RSAPrivateKey

        val jwk = RSAKey.Builder(rsaPublicKey).apply {
            privateKey(rsaPrivateKey)
        }.build()

        val jwks = ImmutableJWKSet<SecurityContext>(JWKSet(jwk))

        NimbusJwtEncoder(jwks)
    }

    /**
     * Configures the JWT Decoder with RSA public key.
     *
     * Uses the provided public key to build a NimbusJwtDecoder for verifying JWT tokens.
     *
     * @return JwtDecoder bean for verifying JWT tokens.
     */
    @Bean
    fun jwtDecoder(): JwtDecoder = properties.jwtSecret._publicKey
        .let(Base64.getDecoder()::decode)
        .let(::X509EncodedKeySpec)
        .let {
            KeyFactory.getInstance("RSA").run { generatePublic(it) as RSAPublicKey }
        }
        .let { rsaPublicKey ->
            NimbusJwtDecoder.withPublicKey(rsaPublicKey).build()
        }

    /**
     * Provides a function for creating SLF4J loggers for any given class.
     *
     * @return Function that accepts a Class reference and returns a Logger instance.
     *
     * Example:
     * ```
     * val log = loggerFactory(MyClass::class.java)
     * log.info("Hello World")
     * ```
     */
    @Bean
    fun loggerFactory(): (Class<*>) -> Logger {
        return { LoggerFactory.getLogger(it) }
    }

}