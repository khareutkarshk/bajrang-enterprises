import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import support from "@/asset/support.png";
import Image from "next/image";
import { InquireForm } from "@/components/InquireForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import toast, { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bajrang Enterprises",
  description: "Bajrang Enterprises is a leading manufacturer of CNC machines in India. We offer a wide range of CNC machines including laser cutting, welding, bending, marking, and router machines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />

       



      </body>
    </html>
  );
}
