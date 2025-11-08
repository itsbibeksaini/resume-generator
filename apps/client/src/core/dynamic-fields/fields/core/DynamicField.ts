import type { JSX, MemoExoticComponent } from "react";
import type { FieldConfig } from "./FieldConfig";
import type z from "zod";

export const DynamicField = {
    create: (config: FieldConfig, options: {render: () => MemoExoticComponent<() => JSX.Element>, getSchema: () => z.ZodType}) => {
        return { render: options.render, getSchema: options.getSchema
         };
    }
}

export type DynamicField = ReturnType<typeof DynamicField.create>;