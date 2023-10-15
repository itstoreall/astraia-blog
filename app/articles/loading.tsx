import Spinner from "@/components/Loading/Spinner";

const Loading = () => {
  const inlineStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "65vh",

    "@media screen and (minWidth: 960px)": {
      height: "75vh",
    },
  };

  return (
    <div style={inlineStyle}>
      <Spinner />
    </div>
  );
};

export default Loading;
