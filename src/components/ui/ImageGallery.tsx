'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import { useState } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageGallery({ images, alt, className = '' }: ImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!images.length) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Slider */}
      <div className="mb-4 rounded-xl overflow-hidden">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          className="rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-w-16 aspect-h-10 bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`${alt} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbnails"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all">
                  <Image
                    src={src}
                    alt={`${alt} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
