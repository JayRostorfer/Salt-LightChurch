import "./globals.css"
import Navbar8 from "@/components/layout/Navbar8"
import Footer from "@/components/layout/Footer"
import BottomNav from "@/components/layout/BottomNav"

export const metadata = {
  title: "Salt and Light",
  description: "The light of the world",
  icons: {
    icon: "images/salt-logo-5.png",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar8 />
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  )
}
