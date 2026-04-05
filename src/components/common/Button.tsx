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
      className={`${className} flex items-center gap-3 text-(--text-black) font-semibold text-[18px] px-6.5 py-3.5 rounded-xl gradient-primary justify-self-center`}
    >
      {icon && <img src={`/assets/svg/${icon}.svg`} alt={icon} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
