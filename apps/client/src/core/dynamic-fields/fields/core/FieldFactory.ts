import { CustomTextField } from "../types/CustomTextField";
import type { DynamicField } from "./DynamicField";
import type { FieldConfig } from "./FieldConfig";

export const FieldFactory = {
    createFields: (config:FieldConfig): DynamicField => {
        switch(config.type) {
            case 'text': return CustomTextField(config)
            default:
                throw new Error(`Unknown field type: ${config.type}`);
        }
    }
}