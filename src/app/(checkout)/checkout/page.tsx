'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCard, HandCoins, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// Define Zod schema for form validation
const checkoutFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  zipCode: z.string().min(3, 'ZIP code must be at least 3 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  saveInfo: z.boolean().default(false),
});

// Infer TypeScript type from Zod schema
type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
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
  ]);

  const [paymentMethod, setPaymentMethod] = useState('card');

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema) as any,
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      phone: '',
      saveInfo: false,
    },
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Handle form submission
  const onSubmit: SubmitHandler<CheckoutFormData> = async (data) => {
    console.log('Checkout submitted:', { data, paymentMethod, cartItems });

    // Add payment method to the submitted data
    const completeData = {
      ...data,
      paymentMethod,
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle successful checkout
    alert('Order placed successfully!');
    console.log('Complete checkout data:', completeData);
  };

  // Watch saveInfo to handle checkbox
  const saveInfo = watch('saveInfo');

  return (
    <section className="py-6 lg:py-10">
      <div className="site-container">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Secure <span className="text-primary">Checkout</span>
          </h1>
          <p className="text-gray-800">Complete your purchase securely</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Checkout Forms */}
            <div className="space-y-8 lg:col-span-2">
              {/* Contact Information */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="text-primary h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className={`mt-1 border-gray-700 ${errors.email ? 'border-primary' : ''}`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-primary mt-1 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="text-primary h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        className={`mt-1 border-gray-700 ${
                          errors.firstName ? 'border-primary' : ''
                        }`}
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <p className="text-primary mt-1 text-sm">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        className={`mt-1 border-gray-700 ${
                          errors.lastName ? 'border-primary' : ''
                        }`}
                        {...register('lastName')}
                      />
                      {errors.lastName && (
                        <p className="text-primary mt-1 text-sm">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-gray-700">
                      Address *
                    </Label>
                    <Input
                      id="address"
                      className={`mt-1 border-gray-700 ${errors.address ? 'border-primary' : ''}`}
                      {...register('address')}
                    />
                    {errors.address && (
                      <p className="text-primary mt-1 text-sm">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="city" className="text-gray-700">
                        City *
                      </Label>
                      <Input
                        id="city"
                        className={`mt-1 border-gray-700 ${errors.city ? 'border-primary' : ''}`}
                        {...register('city')}
                      />
                      {errors.city && (
                        <p className="text-primary mt-1 text-sm">{errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-gray-700">
                        Country *
                      </Label>
                      <Input
                        id="country"
                        className={`mt-1 border-gray-700 ${errors.country ? 'border-primary' : ''}`}
                        {...register('country')}
                      />
                      {errors.country && (
                        <p className="text-primary mt-1 text-sm">{errors.country.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-gray-700">
                        ZIP Code *
                      </Label>
                      <Input
                        id="zipCode"
                        className={`mt-1 border-gray-700 ${errors.zipCode ? 'border-primary' : ''}`}
                        {...register('zipCode')}
                      />
                      {errors.zipCode && (
                        <p className="text-primary mt-1 text-sm">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className={`mt-1 border-gray-700 ${errors.phone ? 'border-primary' : ''}`}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="text-primary mt-1 text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="saveInfo"
                      checked={saveInfo}
                      onCheckedChange={(checked) => setValue('saveInfo', checked as boolean)}
                    />
                    <Label htmlFor="saveInfo" className="text-gray-700">
                      Save this information for next time
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="text-primary h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { id: 'card', label: 'Card Payment', icon: CreditCard },
                      { id: 'cod', label: 'Cash on Delivery', icon: HandCoins },
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                          paymentMethod === method.id
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center gap-3">
                          <method.icon className="h-5 w-5 text-gray-800" />
                          <span>{method.label}</span>
                        </div>
                        <div
                          className={`h-4 w-4 rounded-full border ${
                            paymentMethod === method.id
                              ? 'border-primary bg-primary'
                              : 'border-gray-600'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <Card className="sticky top-8 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Cart Items Preview */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Items ({cartItems.length})</h3>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="relative h-16 w-16 rounded-md bg-gray-700">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{item.name}</h4>
                          <p className="text-sm text-gray-400">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="text-primary font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
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

                  {/* Security Badge */}
                  <div className="rounded-lg bg-gray-800/50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-green-400">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-semibold">Secure Checkout</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Your payment information is encrypted and secure.
                    </p>
                  </div>

                  {/* Place Order Button */}
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary-hov w-full py-6 text-lg text-white"
                    disabled={cartItems.length === 0 || isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-400">
                      By placing your order, you agree to our Terms of Service
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
