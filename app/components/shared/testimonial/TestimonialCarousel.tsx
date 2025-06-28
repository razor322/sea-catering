"use client";

import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  plan: string;
  location: string;
  experience: string;
  rating: number;
}
interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500">Belum ada testimonial</p>
    );
  }

  const bgColors = [
    "bg-amber-50",
    "bg-lime-50",
    "bg-rose-50",
    "bg-blue-50",
    "bg-teal-50",
    "bg-orange-50",
    "bg-purple-50",
  ];

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500">Belum ada testimonial</p>
    );
  }

  return (
    <div ref={sliderRef} className="keen-slider">
      {testimonials.map((item, index) => (
        <div
          key={item.id}
          className={`keen-slider__slide ${bgColors[index % bgColors.length]} 
            rounded-xl shadow border px-6 py-4`}
        >
          <p className="text-sm italic line-clamp-3">{item.experience}</p>

          <div className="flex items-start gap-4 rounded-xl  p-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-semibold text-purple-700">
              👤
            </div>

            {/* Testimonial content */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.location}</p>

              {/* Rating & Plan */}
              <div className="mt-1 flex items-center gap-2">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                <span className="text-xs bg-purple-100 text-purple-800 font-medium px-2 py-1 rounded-full">
                  {item.plan}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
