import { DeleteIcon, LucideDelete, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="radius-20 border-app-background flex items-start gap-10 border-2 p-4">
      <div className="relative h-32 w-32 shrink-0">
        <Image
          fill
          src="https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
          alt="Product Image"
          className="radius-20 shrink-0 object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col items-start justify-start">
        <h3 className="tablet:hidden text-lg font-bold text-(--primary-color)">
          GE Multilin 139-V1EFTZ-DK RTD Sensor
        </h3>
        <div className="tablet:flex hidden w-full items-center justify-between">
          <h3 className="text-lg font-bold text-(--primary-color)">
            GE Multilin 139-V1EFTZ-DK RTD Sensor
          </h3>
          <button className="cursor-pointer">
            <Trash2 />
          </button>
        </div>
        <p className="text-gray-600">Category: Sensors</p>
        <div className="mt-auto flex w-full items-center justify-between">
          <p className="text-2xl font-bold text-(--action-color)">$50.00</p>
          <div className="tablet:flex hidden items-center gap-4 rounded-3xl bg-(--background) p-2 text-xl font-medium text-(--text-black)">
            <span className="cursor-pointer">
              <Minus size={22} />
            </span>
            <span>2</span>
            <span className="cursor-pointer">
              <Plus size={22} />
            </span>
          </div>
        </div>

        <div className="tablet:hidden mt-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-4 rounded-3xl bg-(--background) p-1 text-lg font-medium text-(--text-black)">
            <span className="cursor-pointer">
              <Minus size={18} />
            </span>
            <span>2</span>
            <span className="cursor-pointer">
              <Plus size={18} />
            </span>
          </div>

          <button className="flex items-center gap-2 text-lg font-medium text-(--text-black)">
            <Trash2 size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
