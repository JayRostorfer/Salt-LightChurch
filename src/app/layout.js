import "./globals.css"
import Navbar8 from "@/components/layout/Navbar8"
import Footer from "@/components/layout/Footer"
import BottomNav from "@/components/layout/BottomNav"
import { poppins } from "@/fonts";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/theme";


export const metadata = {
  title: "Salt and Light",
  description: "The light of the world",
}

export default function RootLayout({ children }) {
  return (
    <html className={poppins.variable} lang="en">
      <body>
       <ThemeProvider theme={theme}>
          <CssBaseline />
        <Navbar8 />
          {children}
    <BottomNav />
        <Footer />
        </ThemeProvider> 
        
      </body>
    </html>
  )
}
