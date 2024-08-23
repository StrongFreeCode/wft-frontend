
import { NavbarComponent } from "@/components/NavbarComponent"
import "./global.css";
import { ThemeModeScript } from 'flowbite-react';
import { FooterComponent } from "@/components/FooterComponent";
import { GlobalProvider } from "@/helpers/Global";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';

export const metadata = {
  metadataBase: new URL('https://wonderfulltime.com/'),
  alternates: {
    canonical: '/en',

  },
  title: {
    template: '%s | WONDERFULLTIME',
    default: 'WONDERFULLTIME',
    absolute: 'WONDERFULLTIME'
  },

  applicationName: 'WONDERFULLTIME',
  referrer: 'origin-when-cross-origin',
  keywords: [
    "Turismo en Cuba",
    "Playas cubanas",
    "La Habana",
    "Varadero",
    "Cultura cubana",
    "Cayo Coco",
    "Rutas de senderismo",
    "Música cubana",
    "Historia de Cuba",
    "Gastronomía cubana",
    "Arte en Cuba",
    "Hoteles en Cuba",
    "Tradiciones cubanas",
    "Naturaleza en Cuba",
    "Eventos en Cuba",
    "Arquitectura cubana",
    "Buceo en Cuba",
    "Fiestas populares en Cuba",
    "Transporte en Cuba",
    "Reservas naturales en Cuba"],
  description: "Descubre la magia de Cuba con nuestro sitio web de turismo.Explora playas paradisíacas,la vibrante cultura de La Habana y la rica historia de esta isla caribeña",
  authors: [{ name: 'StrongFreeCode' }, { name: 'StrongFreeCode', url: 'https://strongfreecode.com/' }],
  creator: 'StrongFreeCode',
  publisher: 'Franklin Campos',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WONDERFULLTIME',
    description: '"Descubre Cuba, la joya del Caribe, donde la historia se encuentra con la modernidad. Explora La Habana vibrante, relájate en las playas de Varadero y sumérgete en la cultura única de la isla. ¡Tu aventura inolvidable te espera!"',
    siteName: 'wonderfulltime',
    images: [
      {
        url: '/assets/wft/logo X en jpg.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/assets/wft/logo X en jpg.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'wonderfulltime logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default async function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/wft/logo X en png (16x16).ico" />
        <meta name="robots" content="index" />
        <ThemeModeScript />
      </head>

      <body className="dark:bg-slate-700  drak:bg-clip-text dark:bg-gradient-to-r dark:from-primary-800 dark:to-secondary-900">
        <NextIntlClientProvider messages={messages}>
          <div className="">
            <GlobalProvider>
              <header className="">
                <NavbarComponent />
              </header>
              <main className="">
                {children}
                <Analytics />
                <SpeedInsights />
              </main>
              <footer className="">
                <FooterComponent />
              </footer>
            </GlobalProvider>
          </div>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-J9VX435LXW" />
    </html>
  );
}

