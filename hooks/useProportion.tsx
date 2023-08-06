import { useEffect, useState } from "react";
import useViewport from "./useViewport";

interface IProportionalState {
  width: number;
  height: number;
}

type UseProportion = (w: number, h: number, max: number) => IProportionalState;

const calculateSize: UseProportion = (w, h, max) => {
  const targetAspectRatio = w / h;
  const viewportWidth = window.innerWidth;

  let width, height;

  width = viewportWidth <= max ? viewportWidth : max;
  height = Math.floor(width / targetAspectRatio);

  return { width, height };
};

const useProportion: UseProportion = (w, h, max) => {
  const [orientation, setOrientation] = useState<string>("");
  const [proportionalSize, setProportionalSize] = useState<IProportionalState>({
    width: 0,
    height: 0,
  });

  const { orientation: ornt } = useViewport();

  useEffect(() => {
    const handleResize = () => {
      const newSize = calculateSize(w, h, max);
      setProportionalSize(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // console.log(ornt);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max, orientation]);

  useEffect(() => {
    setOrientation(ornt);
  }, [ornt]);

  return { width: proportionalSize.width, height: proportionalSize.height };
};

export default useProportion;
