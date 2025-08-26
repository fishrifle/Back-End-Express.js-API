"use client";
import Link from "next/link";
import { Task, updateTask, deleteTask } from "@/lib/api";
import { useState } from "react";

export default function TaskCard({ task, onChange }: { task: Task; onChange?: () => void }) {
  const [busy, setBusy] = useState(false);

  const colorMap: Record<Task["color"], string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-500",
    pink: "bg-pink-400",
    gray: "bg-gray-400",
  };

  async function toggleCompleted() {
    setBusy(true);
    try { await updateTask(task.id, { completed: !task.completed }); onChange?.(); }
    finally { setBusy(false); }
  }

  async function handleDelete() {
    if (!confirm("Delete this task?")) return;
    setBusy(true);
    try { await deleteTask(task.id); onChange?.(); }
    finally { setBusy(false); }
  }

  return (
    <div className="card flex items-center justify-between hover:bg-gray-800 transition">
      <div className="flex items-center gap-3">
        <div className={`h-3 w-3 rounded-full ${colorMap[task.color]}`} />
        <Link href={`/tasks/${task.id}/edit`} className="text-sm hover:underline">
          <span className={task.completed ? "line-through text-muted" : ""}>{task.title}</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-muted">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
            disabled={busy}
            className="h-4 w-4 rounded border-gray-600 bg-surface text-primary focus:ring-primary"
          />
          <span>{task.completed ? "Completed" : "Not completed"}</span>
        </label>
        <button onClick={handleDelete} disabled={busy} className="text-red-500 hover:underline text-sm">Delete</button>
      </div>
    </div>
  );
}
