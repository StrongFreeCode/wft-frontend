
import { Flowbite } from 'flowbite-react';
import { CarouselComponent } from '@/components/CarouselComponent';
import { HeroSection } from '@/components/HeroComponent';
import { ExcurcionsComponet } from '@/components/ExcurcionsComponent';
import Comments from '@/components/Comments';

export const metadata = {
  title: 'WONDERFULLTIME | HOME',
}

export default async function MyPage() {

  return (

    <Flowbite>
      <CarouselComponent />
      <HeroSection />
      <ExcurcionsComponet />
      <Comments />

    </Flowbite>
  );
}