import React from "react";

type ButtonProps = {
  text: string;
  icon?: string;
  className?: string;
  type?: "fill" | "outline";
};

const buttonType: Record<"fill" | "outline", string> = {
  fill: "gradient-primary",
  outline:
    "border-2 text-white text-(--text-black) bg-(--action-color) hover:text-white",
};

const Button = ({ text, icon, className = "", type = "fill" }: ButtonProps) => {
  return (
    <button
      className={`${className} ${buttonType[type]} flex cursor-pointer items-center justify-center gap-3 justify-self-center rounded-xl px-6.5 py-3.5 text-[18px] font-semibold text-(--text-black) transition-colors duration-300`}
    >
      {icon && <img src={`/assets/svg/${icon}.svg`} alt={icon} />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Button;
