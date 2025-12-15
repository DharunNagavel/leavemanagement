import type { Metadata } from "next";
import "@/app/globals.css";
import  Navbar  from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Leave Management System",
  description: "A simple leave management system built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`antialiased`}
        >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
