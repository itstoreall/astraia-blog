"use client";
import { useTheme } from "next-themes";
import * as color from "../../theme/index";

const List = () => {
  const { theme } = useTheme();

  const width = "24";
  const height = "24";
  const viewBox = "0 0 32 32";
  const fill = theme === "dark" ? color.contrstDark : color.contrstLight;

  return (
    <div
      style={{
        display: "inline-block",
        padding: "4px",
        borderRadius: "9px",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "8px",
          border: `2px solid ${fill}`,
          borderRadius: "6px",
        }}
      >
        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h8v8H0zm12 2h20v4H12zM0 12h8v8H0zm12 2h20v4H12zM0 24h8v8H0zm12 2h20v4H12z" />
        </svg>
      </div>
    </div>
  );
};

export default List;
