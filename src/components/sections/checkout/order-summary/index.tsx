'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutRightColumnProps {
  cartItems: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  isSubmitting: boolean;
}

export default function CheckoutSummary({
  cartItems,
  subtotal,
  shipping,
  tax,
  total,
  isSubmitting,
}: CheckoutRightColumnProps) {
  return (
    <Card className="sticky top-8 border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-white">Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* ITEMS */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Items ({cartItems.length})</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative h-16 w-16 rounded-md bg-gray-700">
                <Image src={item.image} alt={item.name} fill className="rounded-md object-cover" />
              </div>

              <div className="flex-1">
                <h4 className="font-medium text-white">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  Qty: {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>

              <p className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* TOTALS */}
        <div className="space-y-3 border-t border-gray-800 pt-4">
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

          <div className="flex justify-between border-t border-gray-800 pt-2 text-lg font-bold text-white">
            <span>Total</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* SECURITY */}
        <div className="rounded-lg bg-gray-800/50 p-4">
          <div className="mb-2 flex items-center gap-2 text-green-400">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-semibold">Secure Checkout</span>
          </div>
          <p className="text-sm text-gray-400">Your payment information is encrypted and secure.</p>
        </div>

        <Button
          type="submit"
          className="bg-primary hover:bg-primary-hov w-full py-6 text-lg text-white"
          disabled={cartItems.length === 0 || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Place Order'}
        </Button>
      </CardContent>
    </Card>
  );
}
