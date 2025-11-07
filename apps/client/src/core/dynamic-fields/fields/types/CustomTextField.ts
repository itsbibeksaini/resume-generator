import { DynamicField } from "../core/DynamicField";
import type { FieldConfig } from "../core/FieldConfig";

export const CustomTextField = (config: FieldConfig): DynamicField => 
    DynamicField.create(config, {
        render: () => "Hello World"
    })
