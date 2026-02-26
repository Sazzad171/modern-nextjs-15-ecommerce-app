'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface OrderSummarySectionProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  cartLength: number;
  clearCart: () => void;
}

export default function OrderSummarySection({
  subtotal,
  shipping,
  tax,
  total,
  cartLength,
  clearCart,
}: OrderSummarySectionProps) {
  return (
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
            disabled={cartLength === 0}
          >
            Proceed to Checkout
          </Button>
        </div>

        {cartLength > 0 && (
          <div className="pt-4">
            <Button
              variant="outline"
              className="hover:border-primary w-full border-gray-700 text-gray-300 hover:bg-black hover:text-white"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}

        <div className="pt-6">
          <p className="text-sm text-gray-400">Free returns. Secure payment. 24/7 support.</p>
        </div>
      </CardContent>
    </Card>
  );
}
