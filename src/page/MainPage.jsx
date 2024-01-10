export const MainPage = () => {
  return (
    <>
      <section className="flex flex-col items-center p-10 bg-slate-200">
        <h1 className="p-4 text-2xl font-medium">
          Hvordan siden er laget; Home
        </h1>
        <div className="flex p-4">
          <img
            src="/public/Screenshot from 2024-01-10 19-36-33.png"
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
        </div>
        <div></div>
      </section>
    </>
  );
};
