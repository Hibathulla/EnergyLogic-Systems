import React from "react";

const Button = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: string;
  className?: string;
}) => {
  return (
    <button
      className={`${className} gradient-primary flex cursor-pointer items-center justify-center gap-3 justify-self-center rounded-xl px-6.5 py-3.5 text-[18px] font-semibold text-(--text-black) transition-colors duration-300`}
    >
      {icon && <img src={`/assets/svg/${icon}.svg`} alt={icon} />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Button;
