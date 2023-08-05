"use client";
import Image from "next/image";
import useViewport from "@/hooks/useViewport";
import useProportion from "@/hooks/useProportion";
import { WEB3_STORAGE } from "@/constants";
import defaultImage from "@/assets/images/defaultImage.jpg";
import { MOBILE } from "@/styles/vars";

const ipfs = WEB3_STORAGE;

const setImageSrc = (cid: string) =>
  cid ? `https://${cid}.${ipfs}` : defaultImage;

const ImageHandler = ({ cid }: { cid: string }) => {
  const { viewport } = useViewport();
  const { width, height } = useProportion(
    900,
    450,
    viewport === "tablet" ? 768 : viewport === "desktop" ? 900 : MOBILE + 200
  );

  return (
    <>
      {viewport && (
        <Image
          src={setImageSrc(cid)}
          unoptimized
          alt="Uploaded 3"
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default ImageHandler;
