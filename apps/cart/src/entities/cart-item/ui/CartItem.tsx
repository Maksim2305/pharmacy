import { memo } from 'react';
import type { CartItemType } from '../model/types';

type Props = {
  item: CartItemType;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

export const CartItem = memo(function CartItem({
  item,
  onIncrement,
  onDecrement,
}: Props) {
  return (
    <div>
      <span>
        {item.name} — {item.price} ₽
      </span>

      <button onClick={() => onIncrement(item.id)}>+</button>

      <span> {item.quantity} шт. </span>

      <button onClick={() => onDecrement(item.id)}>−</button>
    </div>
  );
});
