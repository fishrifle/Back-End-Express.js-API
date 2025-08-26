"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import TaskCard from "@/components/TaskCard";
import StatsBar from "@/components/StatsBar";
import { fetchTasks, Task } from "@/lib/api";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setError(null);
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err: any) {
      setError(err?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Tasks</h1>
        <Link href="/tasks/new" className="btn btn-primary">Create Task</Link>
      </div>
      <StatsBar tasks={tasks} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && tasks.length === 0 && <p className="text-gray-600">No tasks yet. Click <span className="font-medium">Create Task</span> to add one.</p>}
      <div className="grid gap-4">
        {tasks.map(task => <TaskCard key={task.id} task={task} onChange={load} />)}
      </div>
    </div>
  );
}
