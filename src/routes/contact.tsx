import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/contact')({
  component: () => <h1 className="text-2xl font-bold">Kontakt</h1>,
})