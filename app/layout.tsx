import "./globals.css";
import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Full-Stack Todo App (Take-home)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <header className="bg-surface border-b border-gray-700">
          <div className="container py-6 flex justify-center">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">
                <span className="text-primary">Todo</span>
                <span className="text-blue-400 ml-1">App</span>
              </h1>
            </div>
          </div>
        </header>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}