import { memo } from "react";
import { DynamicField } from "../core/DynamicField";
import type { FieldConfig, ValidationRule } from "../core/FieldConfig";
import z from "zod";

export const CustomTextField = (config: FieldConfig): DynamicField => 
    DynamicField.create(config, {
        render: () => memo(() => {
            return <>Hello</>
        }),
        getSchema: () => {

            let schema = z.string()

            if(config.validations){
                config.validations.map((validation: ValidationRule) => {
                    if (validation.type === 'required') schema = schema.min(1, validation.message);
                    if (validation.type === 'minLength') schema = schema.min(validation.value, validation.message);
                    if (validation.type === 'maxLength') schema = schema.max(validation.value, validation.message);
                })
            }

            return z.string()
        }
    })
