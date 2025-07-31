import com.github.gradle.node.npm.task.NpmTask

plugins{
    id("com.github.node-gradle.node")
}

node{
    version.set("20.17.0")
    download.set(true)
}

repositories {
    mavenCentral()
}

tasks{
    register<NpmTask>("installPackages"){
        description = "Install packages required by frontend project. It reads package,json to perform installation of node modules."
        args.set(listOf("install", "- debug"))
    }

    register<NpmTask>("buildProject"){
        description = "Build frontend react application."
        dependsOn("installPackages")
        args.set(listOf("run","build"))
    }

    register<NpmTask>("testProject"){
        description = "Run test"
        dependsOn("buildProject")
        args.set(listOf("run","test"))
    }

    register<NpmTask>("checkCoverage"){
        description = "Run check coverage"
        dependsOn("testProject")
        args.set(listOf("run","coverage"))
    }
}