export const MainPage = () => {
  return (
    <>
      <main className="flex flex-col items-center p-10 bg-slate-200">
        <h1 className="text-2xl font-medium">Hvordan siden er laget;</h1>
        <h1 className="pb-4 text-3xl font-medium">Tailwind</h1>
        <section className="flex p-8 rounded-3xl bg-slate-300">
          <img
            src="/Screenshot from 2024-01-11 09-11-31.png"
            className="p-4 rounded-3xl"
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

        <h1 className="p-4 text-2xl font-medium">Kommentarer og Gjøremål;</h1>
        <h1 className="pb-4 text-xl font-medium ">
          Async Await, UseEffect, UseState
        </h1>
        <section className="flex p-8 rounded-3xl bg-slate-300">
          <div>
            <p className="max-w-md p-4 text-lg">
              På undersidene Kommentarer og Gjøremål har jeg gjort mer eller
              mindre det samme på begge. Jeg har hentet inn informasjon fra
              JSONPlaceholder siden. Jeg hentet forskjellige resurser for hver
              av sidene, men logikken er nesten helt lik. På dette bildet ser du
              all koden som er til for å både lage og style Gjøremål siden.
            </p>
            <p className="max-w-md p-4 text-lg">
              Her har jeg brukt en relativt boilerplate async funksjon for
              fetching av data ved bruk av Json filer hentet fra nettet. Denne
              er satt inn i en useEffect for å bare kjøre når siden blir
              aktivert.
            </p>
            <p className="max-w-md p-4 text-lg">
              Informasjonen som blir hentet ut fra Json filen blir inført i HTML
              via Data.map funksjonen som starter på linje 25. Den er laget sånn
              at det blir laget en div med 2 H1 tags og en P tag, hvor respektiv
              data blir innført. Det som skiller seg mest ut med Gjøremål siden
              ovenfor Kommentar siden er at det ikke bare er text values som
              blir hentet fra JSON filen, men også en Boolean verdi.
            </p>
            <p className="max-w-md p-4 text-lg">
              Denne Boolean verdien er håndtert i en enkel funskjon på linje 37
              hvor den innfører text jeg bestemmer utifra om verdien er TRUE
              eller FALSE.
            </p>
          </div>
          <img
            src="/Screenshot from 2024-01-11 13-07-19.png"
            className="p-4 rounded-3xl"
          />
        </section>
      </main>
    </>
  );
};
