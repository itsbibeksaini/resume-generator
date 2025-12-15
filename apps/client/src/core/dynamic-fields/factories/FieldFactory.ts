import type { JSX } from "react"
import type { FieldConfig } from "../core/FieldConfig"
import { CustomCheckBox, CustomDatePicker, CustomTextField } from "../fields"

type FieldFactory = {
    createField: (config: FieldConfig) => JSX.Element
}

export const FieldFactoryImpl: FieldFactory = {
    createField: (config: FieldConfig) => {
        switch (config.type) {
            case "text":
                return CustomTextField.create(config).render();
            case "date-picker":
                return CustomDatePicker.create(config).render();
            case "checkbox":
                return CustomCheckBox.create(config).render();
            default:
                throw new Error(`Unsupported field type: ${config.type}`);
        }
    }
}