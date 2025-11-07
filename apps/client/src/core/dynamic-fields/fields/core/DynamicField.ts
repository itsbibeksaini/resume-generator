import type { FieldConfig } from "./FieldConfig";

export const DynamicField = {
    create: (config: FieldConfig, options: {render: () => string}) => {
        return { render: options.render };
    }
}

export type DynamicField = ReturnType<typeof DynamicField.create>;