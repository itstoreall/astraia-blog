"use client";
import Image from "next/image";
import { globalConfig as cfg } from "@/config";
import defaultImage from "@/assets/images/defaultImage.jpg";

export interface IImageHandlerProps {
  cid: string;
  alt: string;
  grayscale: number;
}

const setImageSrc = (cid: string) =>
  cid ? `https://${cid}.${cfg.gen.ipfs}` : defaultImage;

const ImageHandler = ({ cid, alt, grayscale }: IImageHandlerProps) => {
  const inlineStyle = {
    width: "100%",
    height: "auto",
    filter: `grayscale(${grayscale}%)`,
  };

  return (
    <Image
      src={setImageSrc(cid)}
      unoptimized
      alt={alt}
      width={900}
      height={450}
      style={inlineStyle}
    />
  );
};

export default ImageHandler;
