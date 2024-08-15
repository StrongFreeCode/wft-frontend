
import { Flowbite } from 'flowbite-react';
import { CarouselComponent } from '@/components/CarouselComponent';
import { HeroSection } from '@/components/HeroComponent';
import { ExcurcionsComponet } from '@/components/ExcurcionsComponent';
import Comments from '@/components/Comments';
//import { useFetchData } from '@/hook/useFetchData';
export const metadata = {
  title: 'HOME',
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