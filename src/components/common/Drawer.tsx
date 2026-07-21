"use client";
import { Funnel } from "lucide-react";
import { Fragment, useState } from "react";

const Drawer = ({
  children,
  buttonText,
  icon,
}: {
  children: React.ReactNode;
  buttonText: string;
  icon: React.ReactNode;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="flex cursor-pointer items-center gap-2 rounded-[20px] text-xl font-medium text-(--text-black)"
      >
        {icon && icon}
        {buttonText}
      </button>
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed top-0 right-0 z-50 h-full w-full bg-black/40 transition-opacity duration-300 ${drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-100 bg-white p-4 px-4 transition-all duration-700 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {children}
        </aside>
      </div>
    </Fragment>
  );
};

export default Drawer;
