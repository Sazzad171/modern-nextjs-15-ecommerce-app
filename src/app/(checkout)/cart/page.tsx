'use client';

import CartItemsSection from '@/components/sections/cart/cart-item-section';
import OrderSummarySection from '@/components/sections/cart/order-summary-section';
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartSection() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      quantity: 1,
      image: '/images/products/1.webp',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 49.99,
      quantity: 2,
      image: '/images/products/2.webp',
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 129.99,
      quantity: 1,
      image: '/images/products/3.webp',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <section className="py-6 lg:py-10">
      <div className="site-container">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Your <span className="text-primary">Shopping</span> Cart
          </h1>
          <p className="text-gray-800">Review and manage your items</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartItemsSection
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          </div>

          <div>
            <OrderSummarySection
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              cartLength={cartItems.length}
              clearCart={clearCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
