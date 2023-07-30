"use client";
import Title from "@/components/Title";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return (
    <main>
      <Title tag={"h2"} text={`Oops!!!: ${error.message}`} />
    </main>
  );
};

export default ErrorWrapper;
