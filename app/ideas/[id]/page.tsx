async function getIdea(ideaId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/ideas/records/${ideaId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function IdeaPage({ params }: any) {
  const idea = await getIdea(params.id);
  return (
    <div>
      <h1>Idea {idea.id}</h1>
      <div>
        <h3>{idea.title}</h3>
        <h5>{idea.author}</h5>
        <p>{idea.content}</p>
      </div>
    </div>
  );
}
