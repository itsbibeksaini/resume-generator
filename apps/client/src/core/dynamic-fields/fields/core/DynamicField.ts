import type { JSX, MemoExoticComponent } from "react";
import type { FieldConfig } from "./FieldConfig";

export const DynamicField = {
    create: (config: FieldConfig, options: {render: () => MemoExoticComponent<() => JSX.Element>}) => {
        return { render: options.render };
    }
}

export type DynamicField = ReturnType<typeof DynamicField.create>;