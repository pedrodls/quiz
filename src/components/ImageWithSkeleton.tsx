"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui";
import Image from "next/image";

const ImageWithSkeleton = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };


  }, []);

  return (
    <div
      style={{ width, height }}
    >
      {loading ? (
        <Skeleton className="w-full h-96 bg-slate-200" />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-contain opacity-100"
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
