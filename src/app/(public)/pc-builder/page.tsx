'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Camera,
  CircuitBoard,
  Cpu,
  Fan,
  HardDrive,
  MemoryStick,
  Monitor,
  Plus,
  Printer,
  Save,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';

type ComponentKey = 'cpu' | 'motherboard' | 'ram' | 'storage' | 'gpu' | 'casing';

interface SelectedItem {
  name: string;
  price: number;
}

const COMPONENTS = [
  { key: 'cpu', label: 'Processor', icon: Cpu },
  { key: 'motherboard', label: 'Motherboard', icon: CircuitBoard },
  { key: 'ram', label: 'Memory (RAM)', icon: MemoryStick },
  { key: 'storage', label: 'Storage', icon: HardDrive },
  { key: 'gpu', label: 'Graphics Card', icon: Monitor },
  { key: 'casing', label: 'Casing', icon: Fan },
];

export default function PCBuilderPage() {
  const [selected, setSelected] = useState<Partial<Record<ComponentKey, SelectedItem>>>({});

  const handleSelect = (key: ComponentKey) => {
    // Dummy product
    const dummyProduct = {
      name: 'Sample Product XYZ',
      price: 12000,
    };

    setSelected((prev) => ({
      ...prev,
      [key]: dummyProduct,
    }));
  };

  const handleRemove = (key: ComponentKey) => {
    setSelected((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const totalPrice = Object.values(selected).reduce((acc, item) => acc + (item?.price || 0), 0);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <Card className="overflow-hidden rounded-2xl p-0 shadow-md">
        <CardContent className="space-y-4 p-0">
          <div className="flex flex-col gap-2 bg-gray-100 p-4 md:flex-row md:items-center md:justify-between md:gap-4">
            {/* LEFT SECTION */}
            <div>
              <h1 className="text-xl font-bold md:text-3xl">PC Builder</h1>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Add to Cart</span>
              </Button>

              <Button variant="outline" className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                <span className="hidden sm:inline">Save PC</span>
              </Button>

              <Button variant="outline" className="flex items-center gap-2">
                <Printer className="h-4 w-4" />
                <span className="hidden sm:inline">Print</span>
              </Button>

              <Button variant="outline" className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span className="hidden sm:inline">Screenshot</span>
              </Button>
            </div>
          </div>

          {/* Total Section */}
          <div className="px-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Total Price</span>
              <span className="text-primary text-xl font-bold">
                ৳ {totalPrice.toLocaleString()}
              </span>
            </div>
            <Separator className="mt-4" />
          </div>

          {/* Components list */}
          {COMPONENTS.map((component) => {
            const Icon = component.icon;
            const isSelected = selected[component.key as ComponentKey];

            return (
              <div key={component.key} className="px-4">
                <div className="flex items-center justify-between gap-4">
                  {/* Left Side */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <Icon className="text-primary h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-base font-medium">{component.label}</p>

                      {isSelected && (
                        <p className="text-muted-foreground text-sm">
                          {isSelected.name} — ৳{isSelected.price}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center gap-2">
                    {!isSelected ? (
                      <Button size="sm" onClick={() => handleSelect(component.key as ComponentKey)}>
                        <Plus className="mr-1 h-4 w-4" />
                        Choose
                      </Button>
                    ) : (
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleRemove(component.key as ComponentKey)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <Separator className="mt-4" />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
