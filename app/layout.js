import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I only want tea - A website you can feed poor  developers",
  description: "This website is a crowdfunding platform for chai lover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=" text-white  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      >
        <SessionWrapper>
        <Navbar/>
        <div className=" min-h-screen text-white  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">  
        {children}
        </div>
        <Footer/>
       
        </SessionWrapper>
      </body>
    </html>
  );
}
