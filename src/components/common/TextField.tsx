import React from "react";

const TextField: React.FC<{ placeholder: string; className?: string }> = ({
  placeholder,
  className,
}) => {
  return (
    <input
      type="text"
      placeholder={`${placeholder} *`}
      className={`${className} placeholder:text-[16px] text-16px leading-[170%] text-(--secondary-color) border-[#c4c4c4] border outline-none bg-white rounded-[5px] px-6.5 py-5.5`}
    />
  );
};

export default TextField;
