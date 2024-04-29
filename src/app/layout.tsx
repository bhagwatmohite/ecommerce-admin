import Header from "@/components/Header";
import Sidenavbar from "@/components/Sidenavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < html lang="en" >
      <body className={inter.className} id="style-4">
        <div className="app-container" >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          // enableSystem
          // disableTransitionOnChange
          >
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
              <Sidenavbar />
              <div className="flex flex-col">
                <Header />
                {children}
              </div>
            </div>
            {/* <Footer /> */}
          </ThemeProvider>
        </div>
      </body>
    </html >

  );
}
