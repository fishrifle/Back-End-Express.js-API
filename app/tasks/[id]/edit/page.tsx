"use client";
import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";
import { API_URL, Task } from "@/lib/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditTaskPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const [task, setTask] = useState<Task | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_URL}/tasks`);
        const all = (await res.json()) as Task[];
        const found = all.find(t => t.id === id) || null;
        if (!found) setError("Task not found");
        setTask(found);
      } catch (e: any) {
        setError(e?.message ?? "Failed to load task");
      } finally {
        setLoading(false);
      }
    }
    if (!Number.isNaN(id)) load();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="space-y-6">
      <BackButton />
      <h1 className="text-2xl font-bold">Edit Task</h1>
      <TaskForm mode="edit" initial={task} />
    </div>
  );
}
