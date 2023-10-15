import Spinner from "@/components/Loading/Spinner";
import { CSSProperties } from "react";

const Loading = () => {
  const inlineStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "75vh",
  };

  return (
    <div style={inlineStyle}>
      <Spinner />
    </div>
  );
};

export default Loading;
