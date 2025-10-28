import { createTheme } from "@mui/material"
import customDarkPalette from "./customDarkPalette"
import customLightPalette from "./customLightPalette"
import resumeTemplatePalette from "./resumeTemplatePalette"

export const customTheme = (prefersDarkMode?:boolean) => {
    return createTheme({
        palette: prefersDarkMode ? customDarkPalette : customLightPalette
    })
}

export const resumeTemplateTheme = () => {
    return createTheme({
        palette: resumeTemplatePalette,        
    })
}