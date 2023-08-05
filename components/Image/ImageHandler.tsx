"use client";
import Image from "next/image";
import useViewport from "@/hooks/useViewport";
import useProportion from "@/hooks/useProportion";
import { WEB3_STORAGE } from "@/constants";
import defaultImage from "@/assets/images/defaultImage.jpg";
// import { MOBILE } from "@/styles/vars";

export interface IImageHandlerProps {
  cid: string;
  alt: string;
  size: string;
}

const ipfs = WEB3_STORAGE;

const setImageSrc = (cid: string) =>
  cid ? `https://${cid}.${ipfs}` : defaultImage;

const ImageHandler = ({ cid, alt, size }: IImageHandlerProps) => {
  const isFull = () => size === "full";

  const { viewport } = useViewport();
  const { width, height } = useProportion(
    900,
    450,
    viewport === "tablet"
      ? isFull()
        ? 786
        : 340
      : viewport === "desktop"
      ? isFull()
        ? 900
        : 436
      : 900
  );

  return (
    <>
      {viewport && (
        <Image
          src={setImageSrc(cid)}
          unoptimized
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default ImageHandler;
