import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign_up/sign_up")({
  component: () => (
    <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
      <div className="flex w-full max-w-[1520px] flex-col items-center gap-8 md:flex-row">
        {/* Venstre kolonne - Billede (øverst på mobil) */}
        <div className="md:w-3/5">
          <img
            src="/homepage/signup.jpg"
            alt="PLUS T tilmelding"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="px-6 text-white md:w-2/5 md:pr-12 md:pl-0">
          <h2 className="text-[20px] md:text-[38px]">
            Sådan tilmelder du dig PLUS T
          </h2>
          <p>
            Tilmeldingen til PLUS T åbner midt/slut maj, så sæt kryds i
            kalenderen allerede nu, hvis du vil sikre dig en plads på årets
            fedeste kursus.
          </p>
          <p>
            Når tilmeldingen åbner, foregår det gennem Det Danske Spejderkorps'
            hjemmeside. Du finder alt det praktiske og selve tilmeldingen her:
            https://dds.dk/arrangement/plus-start-plus-t-1{" "}
          </p>
          <p>
            Indtil da kan du følge med på vores sociale medier, hvor vi giver
            besked, så snart tilmeldingen åbner. Husk også at tale med din leder
            eller gruppes bestyrelse om tilskud. Mange grupper og divisioner
            støtter nemlig spejdere, der vil af sted på ungdomskursus. Check
            vores udførlige guide ud du finder her på hjemmesiden til hvordan.
          </p>
        </div>
      </div>
    </div>
  ),
});
