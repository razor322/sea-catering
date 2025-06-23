// components/MenuCard.tsx

import Image from "next/image";
import { Button } from "./ui/button";

type MenuCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

export function MenuCard({
  title,
  description,
  imageUrl,
  price,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border max-w-xs">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold">
            Rp {price.toLocaleString()}
          </span>
          <Button size="sm">Pesan</Button>
        </div>
      </div>
    </div>
  );
}
