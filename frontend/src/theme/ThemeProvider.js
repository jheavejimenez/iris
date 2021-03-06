import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    primary: '#7329F0',
    primaryHover: '#9458F9',
    border: '#7329F0 2px solid',
    background: 'linear-gradient(90deg, #C3BFF5 12.82%, #C280E7 91.48%)',
    text: '#232323',
    textLight: '#fff',
    font: `'General Sans', sans-serif`,
}


export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>