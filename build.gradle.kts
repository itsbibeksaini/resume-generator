plugins{
    application
    kotlin("jvm") version "2.2.0"
    id("io.spring.dependency-management") version "1.1.7"
}

allprojects {
    group = "com.experimental.resume.generator"
    version = "0.0.1-SNAPSHOT"
}

subprojects {
    afterEvaluate {
        apply {
            plugin("application")
            plugin("io.spring.dependency-management")
        }

        dependencyManagement {
            imports {
                mavenBom("org.springframework.boot:spring-boot-dependencies:4.0.0-M1")
            }

            dependencies {

            }
        }
    }
}