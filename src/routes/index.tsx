import { createFileRoute } from '@tanstack/react-router'
import ImageCarousel from '../components/ui/ImageCarousel'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <ImageCarousel />
        {/* Desktop tekstboks - skjult på mobil */}
        <div className="hidden md:block absolute right-20 top-0 bg-gradient-to-b from-brand-black to-brand-black/70 text-white p-8 rounded-b-lg z-20 max-w-2xl">
          <h2 className="text-[42px] font-bold mb-4">ALT ANDET END HVERDAG!</h2>
          <p className="mb-4">Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og oplevelser, du aldrig glemmer? Så tag på PLUS T, seniorkurset hvor vi skruer vi op for eventyret og udfordringen.</p>
          <p className="mb-4">Det bliver intenst. Det bliver krævende. Det bliver årets vildeste efterårsferie! Er du klar?</p>
        </div>
      </div>
      
      {/* Mobil tekstboks - kun synlig på mobil */}
      <div className="md:hidden text-white p-6 w-full">
        <h2 className="text-3xl font-bold mb-4">ALT ANDET END HVERDAG!</h2>
        <p className="mb-4">Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og oplevelser, du aldrig glemmer? Så tag på PLUS T, seniorkurset hvor vi skruer vi op for eventyret og udfordringen.</p>
        <p className="mb-4">Det bliver intenst. Det bliver krævende. Det bliver årets vildeste efterårsferie! Er du klar?</p>
      </div>
    </div>
  ),
})