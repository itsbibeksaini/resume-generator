import type { FieldConfig } from "../fields/core/FieldConfig"

export type SectionRow = {
    subSection: boolean
    header?: string
    fields: FieldConfig[]    
}

export type SectionConfig = {
    header: string
    rows: SectionRow[]
}