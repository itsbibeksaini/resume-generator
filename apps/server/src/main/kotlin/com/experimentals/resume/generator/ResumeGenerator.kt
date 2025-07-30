package com.experimentals.resume.generator

import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class ResumeGenerator

fun main(args: Array<String>) {
    org.springframework.boot.runApplication<ResumeGenerator>(*args)
}