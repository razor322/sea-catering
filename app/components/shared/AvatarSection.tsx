import { Assets } from "@/app/constants/asset_const";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarSection() {
  return (
    <div className="flex items-center space-x-4 py-8 justify-center">
      <div className="flex -space-x-3">
        <Avatar className="border-2 border-white">
          <AvatarImage src={Assets.avatar.avatar_1} />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white">
          <AvatarImage src={Assets.avatar.avatar_2} />
          <AvatarFallback>BB</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white">
          <AvatarImage src={Assets.avatar.avatar_3} />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white">
          <AvatarImage src={Assets.avatar.avatar_4} />
          <AvatarFallback>DD</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-sm md:text-base text-gray-700 font-medium">
        Trusted by <span className="font-bold">5,000+</span>
        Pelanggan
      </p>
    </div>
  );
}
