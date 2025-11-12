import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/contact")({
  component: () => (
    <>
      <div className="flex flex-col items-center pt-2 md:pt-8">
        <h1 className="text-center">Kontakt PLUS T</h1>
        <p className="max-w-3xl text-center">
          Har du nogle spørgsmål til PLUS T? Vil du høre mere om tidligere
          kurser eller er du i tvivl om PLUS T er noget for dig? Så tag fat i en
          af årets kursusledere, vi vil med glæde svare på alle jeres
          spørgsmål!{" "}
        </p>
      </div>

      <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
        <div className="flex w-full max-w-[1520px] flex-col items-center justify-center gap-60 md:flex-row">
          <div className="flex justify-center">
            <img
              src="/homepage/aksel.jpg"
              alt="Aksel"
              className="h-[400px] w-[300px] rounded-lg object-cover"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/homepage/thea.jpg"
              alt="Thea"
              className="h-[400px] w-[300px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-2 md:pt-8">
        <h1 className="text-center">Aksel Buur Christensen </h1>
        <p className="max-w-3xl text-center">
          Aksel har været en del af PLUS T siden 2019, hvor han har været
          vejleder og kursusleder. Når Aksel ikke laver PLUS T, læser han til
          civilingeniør i København.
        </p>
        <p>Kontakt</p>
        <p>Mail: aksel.buur@hotmail.com</p>
        <p>Tlf.: 2923 4567</p>
      </div>
    </>
  ),
});
