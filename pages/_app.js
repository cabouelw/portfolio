import { StrictMode } from 'react'
import AppWrapper from '../components/AppWrapper'
import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return <StrictMode><ThemeProvider><AppWrapper><Component {...pageProps} /></AppWrapper></ThemeProvider></StrictMode>
}

export default MyApp
