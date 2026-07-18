import React from "react";

const PageLayout: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`relative mx-auto mt-28 max-w-375 px-10 py-25 ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
