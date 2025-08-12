package com.experimentals.resume.generator

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ResumeGenerator

fun main(args: Array<String>) {
    runApplication<ResumeGenerator>(*args)
}