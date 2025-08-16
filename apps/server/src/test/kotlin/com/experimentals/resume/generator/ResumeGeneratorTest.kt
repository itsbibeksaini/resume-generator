package com.experimentals.resume.generator

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext

@SpringBootTest
class ResumeGeneratorTest(
    private val context: ApplicationContext
) {
    @Test
    fun `application context loads`() {
        assertNotNull(context, "Application context should have loaded")
    }

    @Test
    fun `main application bean exists`() {
        val mainBean = context.getBean(ResumeGenerator::class.java)
        assertNotNull(mainBean, "Main application bean should exist in context")
    }
}