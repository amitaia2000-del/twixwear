import type {Metadata} from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
export const metadata:Metadata={title:"TWIXWEAR",description:"Streetwear, built as a system."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body><LenisProvider>{children}</LenisProvider></body></html>}