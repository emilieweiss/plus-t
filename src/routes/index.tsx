import { createFileRoute } from '@tanstack/react-router'
import ImageCarousel from '../components/ui/ImageCarousel'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex flex-col items-center gap-6">
      <ImageCarousel />
    </div>
  ),
})