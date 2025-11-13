import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/contact")({
  component: () => (
    <>
      <div className="mb-6 flex flex-col items-center gap-6 px-4 pt-2 md:pt-8">
        <h1 className="text-center">Kontakt PLUS T</h1>
        <p className="max-w-3xl text-center">
          Har du nogle spørgsmål til PLUS T? Vil du høre mere om tidligere
          kurser eller er du i tvivl om PLUS T er noget for dig? Så tag fat i en
          af årets kursusledere, vi vil med glæde svare på alle jeres
          spørgsmål!{" "}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1520px] flex-col items-center justify-center gap-20 md:flex-row">
          {/* Aksel kolonne */}
          <div className="flex max-w-md flex-col items-center">
            <img
              src="/homepage/aksel.jpg"
              alt="Aksel"
              className="mb-6 h-[400px] w-[300px] rounded-lg object-cover"
            />
            <h2 className="mt-6 text-center">Aksel Buur Christensen</h2>
            <p className="text-center">
              Aksel har været en del af PLUS T siden 2019, hvor han har været
              vejleder og kursusleder. Når Aksel ikke laver PLUS T, læser han
              til civilingeniør i København.
            </p>
            <p className="mt-4 font-semibold">Kontakt</p>
            <p>Mail: aksel.buur@hotmail.com</p>
            <p>Tlf.: 2923 4567</p>
          </div>

          {/* Thea kolonne */}
          <div className="flex max-w-md flex-col items-center">
            <img
              src="/homepage/thea.jpg"
              alt="Thea"
              className="mb-6 h-[400px] w-[300px] rounded-lg object-cover"
            />
            <h2 className="mt-6 text-center">Thea Swane Lund </h2>
            <p className="text-center">
              Thea har været en del af PLUS T siden 2024, hvor hun har været
              førstehjælpsansvarlig og vejleder. Når Thea ikke laver PLUS T,
              læser hun til sygeplejerske i København.
            </p>
            <p className="mt-4 font-semibold">Kontakt</p>
            <p>Mail: thea.swane@gmail.com </p>
            <p>Tlf.: 21152974 </p>
          </div>
        </div>
      </div>
    </>
  ),
});
