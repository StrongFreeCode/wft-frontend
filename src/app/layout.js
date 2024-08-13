'use client'
import { NavbarComponent } from "@/components/NavbarComponent"
import "./page.css";
import { Roboto } from 'next/font/google'
import { ThemeModeScript } from 'flowbite-react';
import { FooterComponent } from "@/components/FooterComponent";
import { GlobalProvider } from "@/helpers/Global";
/* 
export const metadata = {
  title: 'Tour-WEB',
  description: 'Home page site for tour on cuba'
} */
const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/wft/logo X en png (16x16).ico" />
        <ThemeModeScript />
      </head>

      <body className="dark:bg-slate-700  drak:bg-clip-text dark:bg-gradient-to-r dark:from-primary-800 dark:to-secondary-900">

        {/*  <div className=" flex flex-col min-h-screen">
          <div className="flex-grow">

          </div>

        </div> */}
        <div class="flex flex-col min-h-screen">
          <GlobalProvider>
            <header class="dark:bg-slate-700  drak:bg-clip-text dark:bg-gradient-to-r dark:from-primary-800 dark:to-secondary-900">
              <NavbarComponent />

            </header>

            <main class="flex-grow">

              {children}
            </main>

            <footer class="dark:bg-slate-700  drak:bg-clip-text dark:bg-gradient-to-r dark:from-primary-800 dark:to-secondary-900">

              <FooterComponent />
            </footer>
          </GlobalProvider>
        </div>
      </body>
    </html>
  );
}