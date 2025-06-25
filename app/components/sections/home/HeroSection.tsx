import React from "react";
import { Assets } from "@/app/constants/asset_const";
// import Image from "next/image";
import ImageWithSpinner from "../../shared/ImageWithSpinner";
export const HeroSection = () => {
  return (
    <div>
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 flex flex-col md:flex-row gap-10 items-center ">
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

          <div className="relative rounded-xl overflow-hidden max-w-md mx-auto">
            <ImageWithSpinner
              src={Assets.illustrations.hero}
              alt="Healthy meal"
              className="w-full rounded-xl object-cover h-[320px] mx-auto px-4 sm:px-4 lg:px-8"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
