"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { TESTIMONIALS } from "../../../constants/string_const";
import { Star } from "lucide-react";

export default function TestimonialCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  const bgColors = [
    "bg-amber-50",
    "bg-lime-50",
    "bg-rose-50",
    "bg-blue-50",
    "bg-teal-50",
    "bg-orange-50",
    "bg-purple-50",
  ];

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider ">
      {TESTIMONIALS.map((item, index) => (
        <div
          key={index}
          className={`keen-slider__slide ${bgColors[index % bgColors.length]} 
    rounded-xl shadow border px-6 py-4`}
        >
          <p className="text-sm italic line-clamp-3">{item.message}</p>
          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400" />
            ))}
          </div>
          <p className="mt-1 text-xs text-gray-500">- {item.name}</p>
        </div>
      ))}
    </div>
  );
}
