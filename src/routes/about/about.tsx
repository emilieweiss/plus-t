import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/about/about')({
  component: () => <h1 className="text-2xl font-bold">Om os</h1>,
})