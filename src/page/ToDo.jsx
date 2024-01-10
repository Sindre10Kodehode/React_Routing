import { useEffect, useState } from "react";

export const ToDos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=50"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchTodo();
  }, []);

  return <>
        <section className="flex flex-col items-center bg-slate-200">
        <h1 className="mt-8 text-2xl">
          På denne siden har jeg fetchet data fra en API.
        </h1>
        <p>Her har du en liste av "Gjøremål" hentet fra jsonplaceholder. </p>

        {data.map((post) => (
          <div
            className="flex flex-col justify-center w-3/5 p-4 m-8 rounded-2xl bg-slate-300"
            key={post.id}
          >
            <h1 className="text-xl">
              <span className="font-bold">Mål nummer: </span> {post.id}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Gjøremål: </span> {post.title}
            </h1>
            <p>
              <span className="font-bold">Status: </span> {post.completed ? "Ikke ferdig ❌" : "Ferdig ✔️"}
            </p>
          </div>
        ))}
      </section>
      </>;
};
