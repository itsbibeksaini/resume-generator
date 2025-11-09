import { useState, useMemo, memo, useCallback, type FC, type FocusEvent } from "react";
import type { SectionConfig } from "../SectionConfig";
import { Box, Divider, Grid, Typography } from "@mui/material";
import styles from './SectionRenderer.module.scss'
import { FieldFactory } from "../../fields/core/FieldFactory";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { FieldConfig } from "../../fields/core/FieldConfig";
import FieldRenderer from "./field/FieldRenderer";

type SectionRendererProps = {
    section:  SectionConfig
}

const SectionRenderer: FC<SectionRendererProps> = ({section}) => {

    const [fieldData, setFieldData] = useState<Record<string, string>>({});

    // Memoize updateField to prevent unnecessary re-renders of FieldRenderer
    const updateField = useCallback((evt: React.FocusEvent<Element> | Dayjs, fieldName: string) => {
        let value = "";

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        } else if (evt && "target" in evt) {
            value = (evt.target as HTMLInputElement).value;    
        }

        setFieldData((data) => ({
            ...data,
            [fieldName]: value,
        }));
    }, []);

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">{section.header}</Typography>
            </Box>
            {
                section.rows.map((row, rowIndex) => {
                    return (
                        <Grid container className={`${styles.row}`} key={rowIndex}>
                            {row.subSection && 
                                <Grid size={12}>
                                    <Typography variant="subtitle1">{row.header}</Typography>
                                </Grid>
                            }

                            {
                                row.fields.map((field) => {
                                    // Get the current value from state or fallback to field.value
                                    const fieldValue = fieldData[field.name] || field.value || '';

                                    return (
                                        <FieldRenderer
                                            key={field.id}
                                            field={field}
                                            value={fieldValue}
                                            onUpdate={updateField}
                                        />
                                    );
                                })
                            }
                        </Grid>
                    )
                })
            }
            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default SectionRenderer