package com.experimentals.resume.generator.configs

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import org.springframework.transaction.PlatformTransactionManager

@SpringBootTest(
    classes = [BeanConfigs::class]
)
class BeanConfigsTest(
    private val context: ApplicationContext,
//    private val properties: ResumeGeneratorProperties
) {


}