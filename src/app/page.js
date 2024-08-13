
import { Flowbite } from 'flowbite-react';
import { CarouselComponent } from '@/components/CarouselComponent';
import { HeroSection } from '@/components/HeroComponent';
import { ExcurcionsComponet } from '@/components/ExcurcionsComponent';
import Comments from '@/components/Comments';
//import { useFetchData } from '@/hook/useFetchData';

export const metadata = {
  metadataBase: new URL('https://wonder-fulltime.vercel.app/'),
  title: 'WONDER-FULLTIME',
  //generator: 'Next.js',
  applicationName: 'WONDER-FULLTIME',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tours', 'Cuba', 'Varadero', 'playa', 'beach'],
  authors: [{ name: 'StrongFreeCode' }, { name: 'StrongFreeCode', url: 'https://github.com/StrongFreeCode/' }],
  creator: 'StrongFreeCode',
  publisher: 'Franklin Campos',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WONDER-FULLTIME',
    description: '"Descubre Cuba, la joya del Caribe, donde la historia se encuentra con la modernidad. Explora La Habana vibrante, relájate en las playas de Varadero y sumérgete en la cultura única de la isla. ¡Tu aventura inolvidable te espera!"',
    siteName: 'wonder-fulltime',
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

export default async function MyPage() {
  //const enpoint = 'excursions'

  //const excursions = await useFetchData({enpoint});
  return (
    <Flowbite>
      <CarouselComponent />
      <HeroSection />
      <ExcurcionsComponet />
      <Comments />

    </Flowbite>
  );
}