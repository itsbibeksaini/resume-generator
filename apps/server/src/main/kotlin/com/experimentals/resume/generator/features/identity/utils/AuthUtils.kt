package com.experimentals.resume.generator.features.identity.utils

import com.experimentals.resume.generator.features.identity.utils.dto.PasswordHash
import java.security.SecureRandom
import java.util.Base64
import java.util.Random
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.PBEKeySpec

class AuthUtils {

    companion object {
        fun createPasswordHash(password: String?, salt: ByteArray?): PasswordHash {
            val salt = salt ?: generateSalt()
            val hash = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256")
                .generateSecret(PBEKeySpec(password?.toCharArray(), salt, 10000, 256))

            return PasswordHash(Base64.getEncoder().encodeToString(hash.encoded), salt)
        }

        fun generateSalt(): ByteArray{
            val salt = ByteArray(16)
            val secureRandom = SecureRandom()
            secureRandom.nextBytes(salt)
            return salt
        }

        fun generateRandomSecuredString(): String{

            val stringLength = 32

            val chars: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')

            return (1..stringLength).map{
                Random().nextInt(0, chars.size).let { chars[it] }
            }.joinToString().replace(", ", "")
        }
    }
}