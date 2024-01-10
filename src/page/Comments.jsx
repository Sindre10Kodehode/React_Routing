import { useEffect, useState } from "react";

export const CommentsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=50"
      );
      const json = await response.json();
      setData(json);
      // console.log(json);
    }
    fetchComments();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center font-Ubuntu bg-slate-200">
        <h1 className="mt-8 text-2xl">
          På denne siden har jeg fetchet data fra en API.
        </h1>
        <p>Her har du en liste av "kommentarer" hentet fra jsonplaceholder.</p>
        {/* <input
          id="comSearch"
          type="search"
          placeholder="Search Here!"
          className="pl-4 m-4 border-2 rounded-xl"
        /> */}
        {data.map((post) => (
          <div
            className="flex flex-col justify-center w-3/5 p-4 m-8 rounded-2xl bg-slate-300"
            key={post.id}
          >
            <h1 className="text-xl">
              <span className="font-bold">Navn:</span> {post.name}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Epost:</span> {post.email}
            </h1>
            <p>
              <span className="font-bold">Kommentar:</span> {post.body}.
            </p>
          </div>
        ))}
      </section>
    </>

    // <h1 className="">
    //   This is the first sub page. You need to do a fetch here from
    //   https://jsonplaceholder.typicode.com/ (choose one of the endpoints)
    // </h1>
  );
};
