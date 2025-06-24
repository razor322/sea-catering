import React from "react";
import CustomCard from "../../shared/CustomCard";

const FeatureSection = () => {
  return (
    <div>
      <section className="pt-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">
            Kenapa Memilih SEA Catering?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            <CustomCard
              title=" Informasi Nutrisi Lengkap"
              description="Setiap menu dilengkapi dengan detail kandungan gizi dan kalori."
              icon="📊"
            />
            <CustomCard
              title="Kustomisasi Menu"
              description="Pilih jenis makanan, porsi, dan bahan sesuai preferensimu."
              icon="🍽️"
            />
            <CustomCard
              title="Pengiriman Nasional"
              description="Kami melayani pengiriman ke berbagai kota besar di Indonesia."
              icon="🚚"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
