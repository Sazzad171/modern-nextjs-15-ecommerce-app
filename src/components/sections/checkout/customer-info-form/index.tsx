'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, HandCoins, ShoppingBag, Truck } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

interface CheckoutLeftColumnProps {
  form: UseFormReturn<any>;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
}

export default function CheckoutCustomerInfoForm({
  form,
  paymentMethod,
  setPaymentMethod,
}: CheckoutLeftColumnProps) {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const saveInfo = watch('saveInfo');

  return (
    <div className="space-y-8">
      {/* CONTACT */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="text-primary h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Email *</Label>
            <Input {...register('email')} />
            {errors.email && (
              <p className="text-primary mt-1 text-sm">{errors.email.message as string}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SHIPPING */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="text-primary h-5 w-5" />
            Shipping Address
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Keep your full shipping JSX here exactly same */}

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              checked={saveInfo}
              onCheckedChange={(checked) => setValue('saveInfo', checked as boolean)}
            />
            <Label>Save this information for next time</Label>
          </div>
        </CardContent>
      </Card>

      {/* PAYMENT */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="text-primary h-5 w-5" />
            Payment Method
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {[
            { id: 'card', label: 'Card Payment', icon: CreditCard },
            { id: 'cod', label: 'Cash on Delivery', icon: HandCoins },
          ].map((method) => (
            <div
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                paymentMethod === method.id ? 'border-primary bg-primary/10' : 'border-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <method.icon className="h-5 w-5" />
                <span>{method.label}</span>
              </div>
              <div
                className={`h-4 w-4 rounded-full border ${
                  paymentMethod === method.id ? 'border-primary bg-primary' : 'border-gray-600'
                }`}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
