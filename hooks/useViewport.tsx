import { useEffect, useState } from "react";
import { isLandscape } from "@/utils";
import { DESKTOP, TABLET } from "@/styles/vars";

const useViewport = (isValue?: boolean, setIsValue?: (b: boolean) => void) => {
  const [viewport, setViewport] = useState<string>("");
  const [landscape, setLandscape] = useState<string>("");

  const getViewportSize = () =>
    typeof window !== "undefined"
      ? window.innerWidth > DESKTOP - 1
        ? "desktop"
        : window.innerWidth > TABLET - 1
        ? "tablet"
        : "mobile"
      : "undefined";

  useEffect(() => {
    const handleResize = () => {
      setViewport(getViewportSize());
      setLandscape(isLandscape() ? "landscape" : "portrait");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (setIsValue) isValue && setIsValue(!isValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport]);

  return { viewport, landscape };
};

export default useViewport;
