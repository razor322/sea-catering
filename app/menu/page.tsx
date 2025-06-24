import Layout from "../components/layout/layout";
import MenuSection from "../components/sections/menu/MenuSection";

export default function MenuPage() {
  return (
    <Layout>
      <section className="pt-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Menu SEA Catering</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pilih dari berbagai pilihan makanan sehat yang bisa kamu kustom sesuai
          kebutuhan harianmu. Semua makanan kami dibuat dengan bahan berkualitas
          dan dikirim langsung ke kota kamu!
        </p>
      </section>
      <MenuSection />
    </Layout>
  );
}
