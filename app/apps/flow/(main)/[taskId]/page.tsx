"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function TaskPage() {
  const params = useParams();
  const taskId = params.taskId;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task {taskId}</h2>
      <p>This is the details page for task {taskId}.</p>
      <Link href="/apps/flow" className="text-blue-500 hover:underline">
        Back to tasks
      </Link>
    </div>
  );
}
