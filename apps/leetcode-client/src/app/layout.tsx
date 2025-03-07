import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/lib/RecoilContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilContextProvider>
          <Navbar />
          <div className="pt-12">{children}</div>
          <Footer />
        </RecoilContextProvider>
      </body>
    </html>
  );
}
