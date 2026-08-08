import { CartItemType } from "@/interface/common.interface";
import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const CartItem = ({
  item,
  removeCartItem,
}: {
  item: CartItemType;
  removeCartItem: (id: number) => void;
}) => {
  const { incrementCartItemQuantity, decrementCartItemQuantity } =
    useCartStore();
  return (
    <div className="radius-20 border-app-background flex items-start gap-10 border-2 p-4">
      <div className="relative h-32 w-32 shrink-0">
        <Image
          fill
          src={item.image_urls?.[0] as string}
          alt="Product Image"
          className="radius-20 shrink-0 object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col items-start justify-start">
        <h3 className="tablet:hidden text-lg font-bold text-(--primary-color)">
          {item.name}
        </h3>
        <div className="tablet:flex hidden w-full items-center justify-between">
          <h3 className="text-lg font-bold text-(--primary-color)">
            GE Multilin 139-V1EFTZ-DK RTD Sensor
          </h3>
          <button className="cursor-pointer">
            <Trash2 />
          </button>
        </div>
        <p className="text-gray-600">Category: {item.brand}</p>
        <div className="mt-auto flex w-full items-center justify-between">
          <p className="text-2xl font-bold text-(--action-color)">
            ${item.price.toFixed(2)}
          </p>
          <div className="tablet:flex hidden items-center gap-4 rounded-3xl bg-(--background) p-2 text-xl font-medium text-(--text-black)">
            <button
              onClick={() => decrementCartItemQuantity(item.id)}
              className="cursor-pointer"
            >
              <Minus size={22} />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => incrementCartItemQuantity(item.id)}
              className="cursor-pointer"
            >
              <Plus size={22} />
            </button>
          </div>
        </div>

        <div className="tablet:hidden mt-6 flex w-full items-center justify-between">
          <div className="flex items-center gap-4 rounded-3xl bg-(--background) p-1 text-lg font-medium text-(--text-black)">
            <button
              onClick={() => decrementCartItemQuantity(item.id)}
              className="cursor-pointer"
            >
              <Minus size={18} />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => incrementCartItemQuantity(item.id)}
              className="cursor-pointer"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            onClick={() => removeCartItem(item.id)}
            className="flex items-center gap-2 text-lg font-medium text-(--text-black)"
          >
            <Trash2 size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
