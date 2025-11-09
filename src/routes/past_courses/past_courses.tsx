import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/past_courses/past_courses')({
  component: () => <h1 className="text-2xl font-bold">Tidligere kurser</h1>,
})