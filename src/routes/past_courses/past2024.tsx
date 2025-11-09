import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/past_courses/past2024')({
  component: () => <h1 className="text-2xl font-bold">Tidligere kursus: 2024</h1>,
})