import TaskForm from "@/components/TaskForm";
import BackButton from "@/components/BackButton";

export default function CreateTaskPage() {
  return (
    <div className="space-y-6">
      <BackButton />
      <h1 className="text-2xl font-bold">Create Task</h1>
      <TaskForm mode="create" />
    </div>
  );
}
