"use client";
import Image from "next/image";
import React from "react";

interface Props {
  alt: string;
  src: string | null | undefined;
  className?: string;
}
function Avatar({ alt, src, className }: Props) {
  if (!src) return null;
  return (
    <div className={`${className} relative w-10 h-10 rounded-full`}>
      <Image
        src={src}
        fill={true}
        className="object-cover  rounded-full"
        alt={alt}
        loading="lazy"
        sizes="max-width:1250px"
        property="true"
      />
    </div>
  );
}

export default Avatar;
