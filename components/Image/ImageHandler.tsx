"use client";
import Image from "next/image";
import useViewport from "@/hooks/useViewport";
import useProportion from "@/hooks/useProportion";
import { WEB3_STORAGE } from "@/constants";
import defaultImage from "@/assets/images/defaultImage.jpg";
// import { useState } from "react";
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
  // const [w, setW] = useState<number>();
  // const [h, setH] = useState<number>();

  const isFull = () => size === "full";

  const { viewport, orientation } = useViewport();
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

  // const { width, height } = useProportion(
  //   900,
  //   450,
  //   viewport === "tablet"
  //     ? isFull()
  //       ? 786
  //       : 340
  //     : viewport === "desktop"
  //     ? isFull()
  //       ? 900
  //       : 436
  //     : 900
  // );

  // useEffect(() => {}, [width, height, landscape]);

  console.log("width, height", width, height);

  const getSize = () => {
    return { width, height };
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>{width}</div>
      <div style={{ textAlign: "center" }}>{height}</div>
      <div style={{ textAlign: "center" }}>{viewport}</div>
      <div style={{ textAlign: "center" }}>
        {2}
        {orientation}
      </div>
      {viewport && (
        <>
          {orientation === "portrait" ? (
            <Image
              src={setImageSrc(cid)}
              unoptimized
              alt={alt}
              width={getSize().width}
              height={getSize().height}
            />
          ) : (
            <Image
              src={setImageSrc(
                "bafybeihcbpo2srkjzr7tembdkkrqlarhapx57vdwpxa7glvgstivggehxq"
              )}
              unoptimized
              alt={alt}
              width={getSize().width}
              height={getSize().height}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ImageHandler;
