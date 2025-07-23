import { TextField } from '@mui/material';

export type Field = {
    id: string,
    label: string,
    value: string,
    type: typeof TextField,
    required: boolean,
}
