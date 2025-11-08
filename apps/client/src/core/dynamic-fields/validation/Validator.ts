import type z from "zod";

export const Validator = (schema: z.ZodObject) => ({
    validate: (data: string): z.ZodSafeParseResult<Record<string, unknown>> => schema.safeParse(data)
})