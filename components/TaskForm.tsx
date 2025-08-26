"use client";
import { useRouter } from "next/navigation";
import { createTask, updateTask, Task } from "@/lib/api";
import { useState } from "react";

const COLORS: Task["color"][] = ["red", "blue", "green", "yellow", "purple", "pink", "gray"];
const chipHex: Record<Task["color"], string> = {
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#EAB308",
  purple: "#8B5CF6",
  pink: "#EC4899",
  gray: "#9CA3AF",
};

export default function TaskForm({ mode, initial }: { mode: "create" | "edit"; initial?: Task }) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [color, setColor] = useState<Task["color"]>(initial?.color ?? "blue");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "create") { await createTask({ title: title.trim(), color }); }
      else if (initial) { await updateTask(initial.id, { title: title.trim(), color }); }
      router.push("/");
    } catch (err: any) { setError(err?.message ?? "Something went wrong"); }
    finally { setBusy(false); }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 max-w-xl">
      <div>
        <label className="label">Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task title"
          required
        />
        <p className="help mt-1">Give your task a short, clear title.</p>
      </div>

      <div>
        <label className="label">Color</label>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              aria-label={`color ${c}`}
              className={`h-8 w-8 rounded-full border-2 ${color === c ? "border-primary" : "border-transparent"}`}
              style={{ backgroundColor: chipHex[c] }}
            />
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div>
        <button type="submit" disabled={busy} className="btn btn-primary">
          {mode === "create" ? "Add Task" : "Save ✔"}
        </button>
         <button
    type="button"
    onClick={() => router.back()}
    className="btn btn-outline flex-1"
  >
    Cancel
  </button>
      </div>
    </form>
  );
}
