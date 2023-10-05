"use client";
import Image from "next/image";
import { WEB3_STORAGE } from "@/constants";
import defaultImage from "@/assets/images/defaultImage.jpg";

export interface IImageHandlerProps {
  cid: string;
  alt: string;
  grayscale: number;
}

const ipfs = WEB3_STORAGE;

const setImageSrc = (cid: string) =>
  cid ? `https://${cid}.${ipfs}` : defaultImage;

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
