import { Quicksand } from "next/font/google";
import { Geologica } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} flex flex-col min-h-svh`}>
        <Navbar />
        <main className="max-w-8xl mx-auto flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
