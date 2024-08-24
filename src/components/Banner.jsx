/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export const Banner = () => {
  return (
    <>
      <section id="Banner">
        <TECarousel showControls showIndicators ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <Image
                loading="lazy"
                width={768}
                height={90}
                src="/assets/images/041.webp"
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <Image
                loading="lazy"
                width={768}
                height={90}
                src="/assets/images/yainie/portada.jpg.webp"
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <Image
                loading="lazy"
                width={768}
                height={90}
                src="/assets/images/043.webp"
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
          </div>
        </TECarousel>
      </section>
    </>
  );
};
