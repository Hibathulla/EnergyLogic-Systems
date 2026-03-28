import React from "react";

const Button = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <button className="flex items-center gap-3 text-(--text-black) font-semibold text-[18px] px-6.5 py-3.5 rounded-xl gradient-primary">
      <img src={`/assets/svg/${icon}.svg`} alt={icon} />
      <span>{text}</span>
    </button>
  );
};

export default Button;
