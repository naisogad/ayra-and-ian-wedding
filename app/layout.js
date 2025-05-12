import "./globals.css";
import localFont from 'next/font/local'
import { Lobster } from 'next/font/google'

const georgia = localFont({ src: './fonts/Georgia.woff2' })

const geoticaThree = localFont({ src: './fonts/GeoticaThree-Regular.woff2' })

const greatVibes = Lobster({
  subsets: ["latin"], weight: ["400"]
})

export const metadata = {
  title: "Ayra & Ian",
  description: "Our Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${greatVibes.className} ${georgia.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
