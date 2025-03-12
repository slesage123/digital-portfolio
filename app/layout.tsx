import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        <main className="py-20 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
