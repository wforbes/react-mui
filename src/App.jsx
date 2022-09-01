// initial starting point taken from mui template:
//  https://github.com/mui/material-ui/blob/v5.10.3/docs/data/material/getting-started/templates/album/Album.js
import * as React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './routes/home';
import ExamplePage from './routes/example';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="example" element={<ExamplePage />} />
      </Routes>
    </ThemeProvider>
  )
}
