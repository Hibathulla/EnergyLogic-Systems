"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const PageLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div
      className={`relative mx-auto mt-28 max-w-375 px-10 py-25 ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
