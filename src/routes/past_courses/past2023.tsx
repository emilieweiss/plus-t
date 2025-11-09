import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/past_courses/past2023')({
  component: () => <h1 className="text-2xl font-bold">Tidligere kursus: 2023</h1>,
})