"use client";
import { Task } from "@/lib/api";

export default function StatsBar({ tasks }: { tasks: Task[] }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  return (
    <div className="card flex items-center justify-between">
      <div className="text-sm text-muted">Tasks: <span className="font-semibold text-text">{total}</span></div>
      <div className="text-sm text-muted">Completed: <span className="font-semibold text-text">{completed}</span> of {total}</div>
    </div>
  );
}
