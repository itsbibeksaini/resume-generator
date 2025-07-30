plugins {
    kotlin("jvm")
    id("org.springframework.boot")
}

tasks{
    test{
        useJUnitPlatform()
    }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    runtimeOnly("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}