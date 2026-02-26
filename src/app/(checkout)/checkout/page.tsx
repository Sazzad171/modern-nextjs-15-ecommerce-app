'use client';

import CheckoutCustomerInfoForm from '@/components/sections/checkout/customer-info-form';
import CheckoutSummary from '@/components/sections/checkout/order-summary';
import { zodResolver } from '@hookform/resolvers/zod';
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
  saveInfo: z.boolean(),
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
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = form;

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
            <CheckoutCustomerInfoForm
              form={form}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            {/* Right Column - Order Summary */}
            <CheckoutSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              isSubmitting={isSubmitting}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
