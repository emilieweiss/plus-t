import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: () => <h1 className="text-2xl font-bold">Velkommen til Plus T</h1>,
})