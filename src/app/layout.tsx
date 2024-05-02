import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import Providers from "./_providers/providers";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

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
  const { sessionClaims } = auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${inter.variable} overscroll-none bg-background antialiased`}
      >
        <Providers>
          <div className="flex h-screen min-h-screen w-full flex-col">
            <Navbar />
            <div className="flex h-full w-full justify-center overflow-auto p-20">
              <SignedIn>
                {sessionClaims?.metadata.access ? (
                  children
                ) : (
                  <div className="flex h-full items-center justify-center text-6xl font-bold">
                    Unauthorized.
                  </div>
                )}
              </SignedIn>
              <SignedOut>
                <div className="flex h-full items-center justify-center text-6xl font-bold">
                  Unauthorized.
                </div>
              </SignedOut>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
