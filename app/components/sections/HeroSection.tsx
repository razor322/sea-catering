import React from "react";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div>
      <section className="py-5 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 flex flex-col md:flex-row gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Makan Sehat, <span className="text-green-600">Tanpa Repot</span>
            </h1>
            <p className="text-gray-600 mb-8">
              SEA Catering menyajikan makanan sehat yang lezat dan dapat
              disesuaikan sesuai kebutuhan harianmu — langsung dikirim ke depan
              pintu.
            </p>
            <a
              href="/menu"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold shadow hover:bg-primary/90 transition"
            >
              Lihat Menu
            </a>
          </div>

          <div>
            <Image
              //   src="https://source.unsplash.com/600x400/?healthy,food"
              src="https://source.unsplash.com/photos/?healthy,food"
              alt="Healthy meal"
              className="w-full rounded-xl shadow-md object-cover h-[320px] mx-auto px-4 sm:px-4 lg:px-8"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
