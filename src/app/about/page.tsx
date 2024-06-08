'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../globals.css';

const About = () => {
  const images = [
    "/images/yankees.jpg",
    "/images/cocktails.jpg",
    "/images/piano.jpg",
    "/images/snowboard.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const showItem = (index: number) => {
    setCurrentIndex(index);
  };

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div>
        <p className="about">
          Hello! I am Roberto Morales, I am from Sonora, Mexico, 31 years old, I studied Mechatronics Engineering at the Instituto Tecnológico de Hermosillo, now I am studying Web Developer at Cornerstone International College in Vancouver, BC. I love sports, especially baseball and snowboarding, I have been playing baseball since I was 10 years old and here I am on 3 teams, hopefully next year in the season my friend and I will put 2 teams, one fast pitch and the other pitch slow. that this is mixed (Women and Men), with snowboarding I just started 2021 and I am waiting for this season to practice again, but now I do workout at night after school, I have been doing this for 7 years and as a hobby. I make cocktails as a bartender/mixologist. I have my own set of tools and alcohol. Next year when I finish school I really want to practice playing the piano, this is something that I wanted all my life but there was no one in my city at that time.
        </p>
      </div>

      <div className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-white'}`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => showItem(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevItem}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextItem}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default About;