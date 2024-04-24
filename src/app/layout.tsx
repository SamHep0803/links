import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sam's Links",
  description: "Sam's personal link shortening service.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} overscroll-none bg-background antialiased`}
      >
        <div className="flex h-screen min-h-screen w-full flex-col ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
