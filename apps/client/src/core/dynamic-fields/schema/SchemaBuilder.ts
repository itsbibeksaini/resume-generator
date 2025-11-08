import { z, type ZodObject } from "zod";
import type { FieldConfig } from "../fields/core/FieldConfig";
import { FieldFactory } from "../fields/core/FieldFactory";
import type { SectionConfig, SectionRow } from "../sections/SectionConfig";
import type { DynamicField } from "../fields/core/DynamicField";

export const SchemaBuilder = {
    build: (section: SectionConfig): ZodObject<Record<string, z.ZodType>> => {
        const buildRow = (rows: SectionRow[]): Record<string, z.ZodType> => {
            let shape: Record<string, z.ZodType> = {}

            rows.map((row: SectionRow) => {
                row.fields.map((field: FieldConfig) => {
                    let currentField: DynamicField = FieldFactory.createFields(field)

                    if(typeof currentField.getSchema === 'function')
                        shape[field.id] = currentField.getSchema()
                    else
                        shape[field.id] = z.string().optional()
                })
            })
            return shape
        }
        return z.object(buildRow(section.rows))
    }
}