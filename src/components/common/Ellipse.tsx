import Image from "next/image";
import React from "react";

const Ellipse = () => {
  const positionsDesk = ["-top-[10%]", "top-[50%]", "top-[50%]", "top-[60%]"];

  const positionsMb = ["top-[10%]", "top-[35%]", "top-[74%]", "top-[60%]"];

  let screenWidth;
  if (typeof window !== "undefined") screenWidth = window.innerWidth;

  const positions = screenWidth! < 800 ? positionsMb : positionsDesk;

  return (
    <>
      {positions.map((pos, i) => (
        <img
          key={i}
          src="/assets/svg/shapes/ellipse.svg"
          className={`object-cover -z-40 ${pos} absolute w-full left-0 right-0`}
          alt="ellipse"
        />
      ))}
    </>
  );
};

export default Ellipse;
