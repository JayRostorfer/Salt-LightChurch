import "./globals.css"
import Navbar8 from "@/components/layout/Navbar8"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Salt and Light",
  description: "The lihght of the world"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar8 />
        {children}
        <Footer />
      </body>
    </html>
  )
}
