export const CART_EVENTS = {
  ADD_ITEM: 'cart:add-item',
} as const;

export type AddCartItemPayload = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
