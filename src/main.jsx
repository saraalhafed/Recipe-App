import {BrowserRouter }from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "styled-components"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
            <App />
    </ThemeProvider>
  </BrowserRouter>,
)
/* every thing inside the file gitignore will not tracked by github , automaticly all the libraries or package wich take alot of space will be inside it */
/* i creat a file .env to protact my App-key and App-ID */

/* .env : to protact my data from still, */