import { Toaster } from 'sonner';
import { Rocket } from 'lucide-react';
import { ExampleForm } from '@/components/example/form';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Next.js 15 Starter</h1>
          </div>
          <p className="text-gray-600">
            A modern stack with TypeScript, shadcn/ui, React Hook Form, Zod, Tailwind CSS, and Sonner
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js 15 (App Router)</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• shadcn/ui components</li>
                <li>• React Hook Form + Zod validation</li>
                <li>• Lucide React icons</li>
                <li>• Sonner toast notifications</li>
                <li>• ESLint + React Hooks + React Refresh</li>
                <li>• Prettier + lint-staged</li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Development</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• ESLint with live error checking</li>
                <li>• Pre-commit hooks with lint-staged</li>
                <li>• Auto-formatting with Prettier</li>
                <li>• Type-safe development</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ExampleForm />
          </div>
        </div>
      </div>
      
      <Toaster position="top-right" />
    </main>
  );
}