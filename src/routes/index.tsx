import { createFileRoute } from '@tanstack/react-router'
import ImageCarousel from '../components/ui/ImageCarousel'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="relative flex flex-col items-center gap-6">
      <ImageCarousel />
      <div className="absolute right-20 top-0 bg-gradient-to-b from-brand-black to-brand-black/70 text-white p-8 rounded-b-lg z-20 max-w-2xl">
        <h2 className="text-[42px] font-bold mb-4">ALT ANDET END HVERDAG!</h2>
        <p className="text-lg mb-4">Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og oplevelser, du aldrig glemmer? Så tag på PLUS T, seniorkurset hvor vi skruer vi op for eventyret og udfordringen.</p>
        <p className="text-lg mb-4">Det bliver intenst. Det bliver krævende. Det bliver årets vildeste efterårsferie! Er du klar?</p>
      </div>
    </div>
  ),
})