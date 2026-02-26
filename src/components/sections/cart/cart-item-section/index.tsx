'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemsSectionProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

export default function CartItemsSection({
  cartItems,
  updateQuantity,
  removeItem,
}: CartItemsSectionProps) {
  return (
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
                <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-md bg-gray-700 sm:w-24">
                  <Image src={item.image} alt={item.name} fill />
                </div>

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
  );
}
