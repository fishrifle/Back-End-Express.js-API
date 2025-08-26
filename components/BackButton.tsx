"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // optional, if you want an icon

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}
