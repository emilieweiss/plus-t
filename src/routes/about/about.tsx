import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/about/about")({
  component: () => (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl px-4">
        <h2 className="text-center">Om PLUS T</h2>
        <img
          src="/homepage/om.jpg"
          alt="Om PLUS T"
          className="mb-6 w-full max-w-3xl rounded-lg object-cover"
        />
        <p className="text-center">
          PLUS T er et spejderkursus for dig, der vil mere end det sædvanlige.
          En uge i efterårsferien fyldt med udfordringer, fællesskab og
          oplevelser, du ikke glemmer. Du og din patrulje bliver kastet ud i
          både natur- og byaktiviteter, hvor I tester jeres grænser, styrker
          samarbejdet og lærer at håndtere pres. Kurset kombinerer action,
          refleksion og adventurespejd på højt niveau, så du udvikler dig både
          som spejder og som menneske. Det kræver mod, udholdenhed og lysten til
          at blive udfordret, men belønningen er oplevelser, nye venskaber og
          inspiration til dit videre spejderliv. PLUS T afholdes i uge 42 og er
          forseniorspejdere mellem 16 og 23 år, der kan svømme 200 meter, bære
          oppakning og er klar på årets vildeste efterår.
        </p>
      </div>
    </div>
  ),
});
