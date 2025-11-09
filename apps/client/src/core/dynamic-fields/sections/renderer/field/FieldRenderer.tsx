import { useMemo, type FC, type FocusEvent } from "react";
import type { FieldConfig } from "../../../fields/core/FieldConfig";
import { FieldFactory } from "../../../fields/core/FieldFactory";
import type { Dayjs } from "dayjs";
import { Grid } from "@mui/material";
import styles from '../SectionRenderer.module.scss'

type FieldRendererProps = {
    field: FieldConfig;
    value: string;
    onUpdate: (evt: React.FocusEvent<Element> | Dayjs, fieldName: string) => void;
}

const FieldRenderer: FC<FieldRendererProps> = ({field, value, onUpdate}) => {

    // Memoize the Field component to prevent recreation on every render
    const Field = useMemo(() => {
        return FieldFactory.createFields(field).render();
    }, [field.id, field.type])

    // Create handlers based on field type
    const fieldHandlers = useMemo(() => {
        if (field.type === 'text') {
            return { 
                onBlur: (e: FocusEvent<Element>) => onUpdate(e, field.name),
                value: value
            };
        } else if (field.type === 'date-picker') {
            return { 
                onChange: (e: Dayjs) => onUpdate(e, field.name),
                value: value
            };
        }
        return { value: value };
    }, [field.type, field.name, value, onUpdate]);

    return(
         <Grid size={field.col} className={`${styles.col}`}>
            <Field 
                label={field.label || "Test"} 
                id={field.id} 
                name={field.name} 
                col={0}
                required={field.required}
                icon={field.icon}
                {...fieldHandlers}
            />
        </Grid>
    )
}

export default FieldRenderer