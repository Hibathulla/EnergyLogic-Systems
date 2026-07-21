import Button from "@/components/common/Button";
import CartItem from "@/components/store/CartItem";
import PageLayout from "@/layouts/pageLayout";
import React from "react";

export default function CartPage() {
  return (
    <PageLayout>
      <h1 className="text-center text-4xl font-bold">Cart</h1>

      <div className="laptop:grid-cols-[2fr_1fr] mt-12 grid grid-cols-1 gap-16">
        <div className="radius-20 flex flex-col gap-3 bg-white px-6 py-12">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="radius-20 flex flex-col gap-10 self-start bg-white px-12 py-16">
          <h2 className="text-2xl font-bold">Amount Card</h2>
          <p>Total: $100.00</p>
          <Button text="Checkout" />
        </div>
      </div>
    </PageLayout>
  );
}
