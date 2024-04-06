"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[700px]">
      <Carousel pauseOnHover>
        <Image
          src="https://cdn.pixabay.com/photo/2017/04/09/18/54/shoes-2216498_1280.jpg"
          alt="..."
          width={1000}
          height={1000}
        />
        <Image
          src="https://cdn.pixabay.com/photo/2023/05/29/13/10/shoes-8026038_1280.jpg"
          alt="..."
          width={1000}
          height={1000}
        />
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
          alt="..."
          width={1000}
          height={1000}
        />
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
