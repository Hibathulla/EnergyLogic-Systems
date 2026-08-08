"use client";
import { PAGE_URLS } from "@/constants/PAGE_URLS";
import { useCartStore } from "@/store/cartStore";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import { ShoppingBag } from "lucide-react";

const CartButton = ({ noBg }: { noBg?: boolean }) => {
  const { cartCount } = useCartStore();
  const router = useTransitionRouter();
  return (
    <button
      onClick={() => router.push(PAGE_URLS.CART)}
      className={`${noBg ? "" : "gradient-primary"} relative ml-auto flex h-10.25 w-10.25 cursor-pointer items-center justify-center rounded-full`}
    >
      <ShoppingBag />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-(--secondary-color) text-sm font-medium text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
