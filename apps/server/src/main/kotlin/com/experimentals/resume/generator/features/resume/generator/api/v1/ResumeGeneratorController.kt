package com.experimentals.resume.generator.features.resume.generator.api.v1

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/resume")
class ResumeGeneratorController {

    @GetMapping("/test")
    fun test(): String{
        return "Hello, Resume Generator!"
    }
}