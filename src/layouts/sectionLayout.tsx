import React from "react";

const SectionLayout: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={`relative max-w-375 mx-auto py-25 px-10 ${className}`}>
      {children}
    </div>
  );
};

export default SectionLayout;
