import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm")
    kotlin("plugin.spring")
    id("org.springframework.boot")
}

tasks{
    test{
        useJUnitPlatform()
    }

    jar{
        enabled = false
    }

    withType<KotlinCompile>{
        compilerOptions {
            freeCompilerArgs.set(listOf("-Xjsr305=strict", "-Xannotation-default-target=param-property"))
            jvmTarget.set(JvmTarget.JVM_21)
        }
    }

    java{
        toolchain {
            languageVersion.set(JavaLanguageVersion.of(21))
            targetCompatibility.seset(JavaLanguageVersion.of(21))
        }
    }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui")
    implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
    implementation("org.springframework.boot:spring-boot-starter-security")

    runtimeOnly("org.jetbrains.kotlin:kotlin-reflect")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}