import { createTheme } from "@mui/material"
import customDarkPalette from "./customDarkPalette"
import customLightPalette from "./customLightPalette"

const customTheme = (prefersDarkMode?:boolean) => {
    return createTheme({
        palette: prefersDarkMode ? customDarkPalette : customLightPalette
    })
}

export default customTheme