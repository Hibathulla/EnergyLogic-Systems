import { Tables } from "@/types/supabase";

export interface ItemInterface {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export interface CartItemType extends Tables<"products"> {
  quantity: number;
}
