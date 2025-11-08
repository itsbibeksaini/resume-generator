import { memo } from "react";
import { DynamicField } from "../core/DynamicField";
import type { FieldConfig } from "../core/FieldConfig";
import z from "zod";

export const CustomTextField = (config: FieldConfig): DynamicField => 
    DynamicField.create(config, {
        render: () => memo(() => {
            return <>Hello</>
        }),
        getSchema: () => z.string()
    })
