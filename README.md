Todo Frontend (Next.js + Tailwind + TypeScript)

This is the frontend for the Todo List App take-home project.
It connects to the backend API (Express + Prisma + MySQL) and provides a simple interface to manage tasks.

Features

View all tasks on the home page

Create new tasks with title + color

Edit existing tasks

Toggle tasks as completed / not completed

Delete tasks with confirmation

Task summary bar showing total and completed counts

Mobile-first responsive design

Dark theme styled to match the provided Figma

Tech Stack

Next.js (App Router)

Tailwind CSS

TypeScript

lucide-react
 for the header icon

Getting Started
1. Install dependencies
npm install

2. Configure API URL

Create a .env.local file with:

NEXT_PUBLIC_API_URL=http://localhost:4000


(make sure the backend server is running on port 4000)

3. Run the dev server
npm run dev


Then open http://localhost:3000
.

Pages

/ → Home (list, toggle, delete, stats, create button)

/tasks/new → Create Task form (Add / Cancel)

/tasks/[id]/edit → Edit Task form (Save / Cancel)