import { Flame, Salad, Drumstick } from "lucide-react";

export default function MenuHighlightSection() {
  const highlights = [
    {
      name: "Ayam Bakar Madu",
      desc: "Daging ayam bakar empuk dengan saus madu spesial.",
      price: "Rp30.000",
      icon: <Drumstick className="w-6 h-6 text-orange-600" />,
    },
    {
      name: "Salad Sehat",
      desc: "Sayur segar + dressing rendah kalori, cocok untuk diet.",
      price: "Rp20.000",
      icon: <Salad className="w-6 h-6 text-green-600" />,
    },
    {
      name: "Spicy Dori Bowl",
      desc: "Ikan dori crispy, nasi hangat, sambal pedas mantap.",
      price: "Rp28.000",
      icon: <Flame className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <section className="bg-white pt-6 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Menu Favorit Kami 🍽️
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <p className="text-sm font-bold text-primary">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
