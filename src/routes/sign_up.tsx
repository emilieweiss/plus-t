import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/sign_up')({
  component: () => <h1 className="text-2xl font-bold">Tilmeld dig</h1>,
})