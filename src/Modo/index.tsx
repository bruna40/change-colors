import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Style/theme";
import GlobalStyle from "../Style/globalStyles";
import { Button } from "./style";


export function Modo() {
    const [isDarkTheme, setIsDarkTheme ] = useState(false)

    return(
        <ThemeProvider theme={
            isDarkTheme? darkTheme : lightTheme
        }>
            <GlobalStyle />
            <Button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
                {
                    isDarkTheme? <Moon size={50} /> : <Sun size={50} />
                }
            </Button>
        </ThemeProvider>
    )
}