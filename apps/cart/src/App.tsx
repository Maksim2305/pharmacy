import { useEffect, useMemo, useState } from "react";
import { CartItem, type CartItemType } from './entities/cart-item';
import { useCartEvents } from './features/add-to-cart'

const initialItems: CartItemType[] = [
  { id: 1, name: "Витамин C", price: 350, quantity: 2 },
  { id: 2, name: "Парацетамол", price: 120, quantity: 1 },
];

function App() {
  const [items, setItems] = useState<CartItemType[]>(initialItems);

  useCartEvents(setItems);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  function increment(id: number) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrement(id: number) {
    setItems((currentItems) =>
      currentItems.find((it) => it.id === id)?.quantity === 1
        ? currentItems.filter((it) => it.id !== id)
        : currentItems.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item,
          ),
    );
  }

  return (
    <section>
      <h2>Моя корзина</h2>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={increment}
          onDecrement={decrement}
        />
      ))}

      <h3>Итого: {total} ₽</h3>
    </section>
  );
}

export default App;
