import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { CART_EVENTS, type AddCartItemPayload } from '@pharmacy/contracts';

type SetItems = Dispatch<SetStateAction<AddCartItemPayload[]>>;

export function useCartEvents(setItems: SetItems) {
  useEffect(() => {
    function handleAddItem(event: Event) {
      const { detail: newItem } = event as CustomEvent<AddCartItemPayload>;

      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === newItem.id,
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          );
        }

        return [...currentItems, newItem];
      });
    }

    window.addEventListener(CART_EVENTS.ADD_ITEM, handleAddItem);

    return () => {
      window.removeEventListener(CART_EVENTS.ADD_ITEM, handleAddItem);
    };
  }, [setItems]);
}
