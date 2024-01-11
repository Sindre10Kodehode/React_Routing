export const MainPage = () => {
  return (
    <>
      <main className="flex flex-col items-center p-10 bg-slate-200">
        <h1 className="p-4 text-2xl font-medium">
          Hvordan siden er laget; Tailwind
        </h1>
        <section className="flex p-4">
          <img
            src="/public/Screenshot from 2024-01-11 09-11-31.png"
            className="p-4"
          />
          <div>
            <p className="max-w-md p-4 text-lg">
              For dette prosjektet bestemte jeg meg for å gjøre all styling med
              Tailwind. Det er ett inline styling verktøy som gjør at du kan
              style alt via classNames i HTML koden, som regel forkortelser av
              CSS syntaksen, som vist på dette bildet. Jeg har tidligere
              kombinert Tailwind med vanilla CSS på de fleste prosjekter.
              Tailwind for det lette, vanilla CSS for det mer avanserte. Jeg
              bestemte meg for å gjøre all styling med Tailwind i dette
              prosjektet for å fordype mine ferdigheter i Tailwind.
            </p>
            <p className="max-w-md p-4 text-lg">
              For å få REACT logoene til å spinne så sakte som jeg ville de
              skulle lagde jeg en egen class for det i Tailwind cofig filen til
              denne siden. Jeg ville få de til å rotere for å få litt bevegelse
              på siden, men var aktivt bevist på å gjøre effekten sakte for at
              det ikke skal være distraherende.
            </p>
          </div>
        </section>
          <h1 className="p-4 text-2xl font-medium">
          Kommentarer og Gjøremål;
        </h1>
        <h1 className="text-xl font-medium ">
        Async Await, UseEffect, UseState
        </h1>
        
      </main>
    </>
  );
};
