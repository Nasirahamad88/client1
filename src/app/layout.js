import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ScrollToTopButton from "@/Component/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div style={{ backgroundColor: '#17171d' }}>
          <Navbar/>
        {children}
        <ScrollToTopButton/>
        <Footer/>
        </div>
        
        
      </body>
    </html>
  );
}
