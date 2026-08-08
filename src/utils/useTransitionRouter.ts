"use client";
import { useLoaderStore } from "@/store/loaderStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useTransitionRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsLoading } = useLoaderStore();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, setIsLoading]);

  const transitionPush = (url: string) => {
    setIsLoading(true);
    router.push(url);
  };

  const transitionReplace = (url: string) => {
    setIsLoading(true);
    router.replace(url);
  };

  return {
    ...router,
    push: transitionPush,
    replace: transitionReplace,
  };
};
