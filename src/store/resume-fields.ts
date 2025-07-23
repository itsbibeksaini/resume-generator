import { TextField } from "@mui/material";
import type { Field } from "./field";

export const BANNER_FIELDS: Field[] = [
    {
        id:"FIRST_NAME",
        label: "First Name",
        value: "",
        type: TextField,
        required: true,
    }
]