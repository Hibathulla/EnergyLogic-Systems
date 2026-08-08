"use client";

import { useLoaderStore } from "@/store/loaderStore";

const Loader = () => {
  const { isLoading } = useLoaderStore();

  if (!isLoading) return;
  return (
    <div className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/40">
      <div className="loader gradient-primary aspect-square h-12.5 w-12.5 rounded-[50%] p-8" />
    </div>
  );
};

export default Loader;
