import { Button } from "@/components/ui/button";
import ImageWithSpinner from "../ImageWithSpinner";

type MenuProps = {
  name: string;
  price: string;
  description: string;
  image?: string;
  onSeeMore: () => void;
};

export default function MealPlanCard({
  name,
  price,
  description,
  image,
  onSeeMore,
}: MenuProps) {
  return (
    <div className="rounded-xl border p-4 shadow hover:shadow-md transition bg-white">
      {image && (
        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
          <ImageWithSpinner src={image} alt={name} fill />
        </div>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{price}</p>
      <p className="mt-2 text-sm">{description}</p>
      <Button className="mt-4" onClick={onSeeMore}>
        Lihat Detail
      </Button>
    </div>
  );
}
