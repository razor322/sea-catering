"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number | null;
  height?: number | null;
  fill?: boolean;
};

export default function ImageWithSpinner({
  src,
  alt,
  className,
  width,
  height,
  fill,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      <Image
        src={src}
        alt={alt}
        width={width ?? undefined}
        height={height ?? undefined}
        fill={fill ?? false}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn(
          "object-cover transition-opacity duration-500 ease-in-out" +
            className,
          isLoading ? "opacity-0" : "opacity-100 "
        )}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-100">
          <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
}
