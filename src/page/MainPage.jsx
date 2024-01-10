export const MainPage = () => {
  return (
    <>
      <section className="flex flex-col items-center p-10 bg-slate-200 Hero">
        <div className="flex font-medium">
          <img src="/src/assets/react.svg" className="animate-spin-slow" />
        <h1 className="p-4 text-2xl">Dette er en nettside laget med REACT</h1>
        <img src="/src/assets/react.svg" className="animate-spin-slow" />
        </div>
        <div className="flex p-8">
      <p>For dette prosjektet bestemte jeg meg for å gjøre all styling med Tailwind. Det er ett inline styling verktøy som gjør at du kan style alt via classNames i HTML koden. </p>
      </div>
      </section>
    </>
  );
};
