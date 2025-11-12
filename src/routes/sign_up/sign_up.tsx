import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign_up/sign_up')({
  component: () => (
    <div className="flex justify-center items-center min-h-[calc(100vh-130px)] px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1520px] w-full items-center">
        {/* Venstre kolonne - Billede (øverst på mobil) */}
        <div className="md:w-3/5">
          <img 
            src="/homepage/signup.jpg" 
            alt="PLUS T tilmelding" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="md:w-2/5 text-white">
          <h2 className="text-2xl md:text-[42px]">Sådan tilmelder du dig PLUS T</h2>
          <p>Tilmeldingen til PLUS T åbner midt/slut maj, så sæt kryds i kalenderen allerede nu, hvis du vil sikre dig en plads på årets fedeste kursus."</p> 
          <p>Når tilmeldingen åbner, foregår det gennem Det Danske Spejderkorps' hjemmeside. Du finder alt det praktiske og selve tilmeldingen her: https://dds.dk/arrangement/plus-start-plus-t-1 </p>
          <p>Indtil da kan du følge med på vores sociale medier, hvor vi giver besked, så snart tilmeldingen åbner. Husk også at tale med din leder eller gruppes bestyrelse om tilskud. Mange grupper og divisioner støtter nemlig spejdere, der vil af sted på ungdomskursus. Check vores udførlige guide ud du finder her på hjemmesiden til hvordan.</p>
        </div>
      </div>
    </div>
  )
})