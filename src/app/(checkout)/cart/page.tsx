'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
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
    { id: 2, name: 'Wireless Mouse', price: 49.99, quantity: 2, image: '/images/products/2.webp' },
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <section className="py-6 lg:py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Your <span className="text-primary">Shopping</span> Cart
          </h1>
          <p className="text-gray-800">Review and manage your items</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="text-primary h-5 w-5" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <div className="py-12 text-center">
                    <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-700" />
                    <p className="text-lg text-gray-400">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-200/50 p-4 sm:flex-row"
                      >
                        {/* Product Image */}
                        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-md bg-gray-700 sm:w-24">
                          <Image src={item.image ?? ''} alt={item.name ?? 'product image'} fill />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold">{item.name}</h3>
                              <p className="text-primary mt-2 text-xl font-bold">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="bg-primary/10 text-primary"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Quantity Controls */}
                          <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="hover:border-primary hover:bg-primary border-gray-700 hover:text-white"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 rounded-md bg-gray-900 py-1.5 text-center font-medium text-white">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="hover:border-primary hover:bg-primary border-gray-700 hover:text-white"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <Card className="sticky top-8 border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="bg-primary hover:bg-primary-hov w-full py-6 text-lg text-white"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>

                {cartItems.length > 0 && (
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="hover:border-primary w-full border-gray-700 text-gray-300 hover:bg-black hover:text-white"
                      onClick={() => setCartItems([])}
                    >
                      Clear Cart
                    </Button>
                  </div>
                )}

                <div className="pt-6">
                  <p className="text-sm text-gray-400">
                    Free returns. Secure payment. 24/7 support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
