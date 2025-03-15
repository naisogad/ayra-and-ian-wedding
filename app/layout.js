import "./globals.css";
import localFont from 'next/font/local'

export const georgia = localFont({ src: './fonts/Georgia.woff2' })

export const geoticaThree = localFont({ src: './fonts/GeoticaThree-Regular.woff2' })

export const metadata = {
  title: "Ayra & Ian",
  description: "Our Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geoticaThree.className} ${georgia.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
