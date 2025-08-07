package com.experimentals.resume.generator.features.identity.utils

import com.experimentals.resume.generator.features.identity.utils.dto.PasswordHash
import java.security.SecureRandom
import java.util.Base64
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.PBEKeySpec

class AuthUtils {

    companion object {
        fun createPasswordHash(password: String, salt: ByteArray?): PasswordHash {
            val salt = salt ?: generateSalt()
            val hash = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256")
                .generateSecret(PBEKeySpec(password.toCharArray(), salt, 10000, 256))

            return PasswordHash(Base64.getEncoder().encodeToString(hash.encoded), salt)
        }

        fun generateSalt(): ByteArray{
            val salt = ByteArray(16)
            val secureRandom = SecureRandom()
            secureRandom.nextBytes(salt)
            return salt
        }
    }
}