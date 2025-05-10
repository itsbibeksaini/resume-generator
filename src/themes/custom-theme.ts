import { createTheme } from "@mui/material";
import customLightPalette from "./custom-palette-light";
import customDarkPalette from "./custom-palette-dark";

const customTheme = (prefersDarkMode?:boolean) =>{

    return createTheme({
        palette: prefersDarkMode ? customDarkPalette : customLightPalette,        
    })
}

export default customTheme