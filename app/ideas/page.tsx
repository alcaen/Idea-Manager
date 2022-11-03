import Link from "next/link";
import CreateIdea from "./CreateIdea";
async function getIdeas() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/ideas/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function IdeasPage() {
  const ideas = await getIdeas();
  return (
    <div>
      <h1>Ideas</h1>
      <div className="flex justify-between mx-8">
        {ideas.map((idea) => {
          return <Idea key={idea.id} idea={idea} />;
        })}
      </div>
      <CreateIdea />
    </div>
  );
}

function Idea({ idea }: any) {
  const { id, title, content, state, author, is_private, created } = idea || {};
  return (
    <Link href={`/ideas/${id}`}>
      <div
        className={`p-5 ${
          state === "done"
            ? "bg-green-400"
            : state === "inprogress"
            ? "bg-orange-400"
            : "bg-red-500"
        }`}
      >
        <h2 className="font-bold">{title}</h2>
        <p>{content}</p>
        <p>{created}</p>
        <p>Created by: {author}</p>
      </div>
    </Link>
  );
}
