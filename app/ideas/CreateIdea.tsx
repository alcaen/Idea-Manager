"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateIdea() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Alcaen");
  const [ideaState, setIdeaState] = useState("todo");
  const [isPrivate, setIsPrivate] = useState("False");

  const router = useRouter();
  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/ideas/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        state: ideaState,
        author,
        private: isPrivate,
      }),
    });
    setContent("");
    setTitle("");
    setAuthor("Alcaen");
    setIdeaState("todo");
    setIsPrivate("False");
    router.refresh();
  };
  return (
    <div>
      <form onSubmit={create}>
        <h2>Create New Idea</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={ideaState}
          onChange={(e) => setIdeaState(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <select
          value={isPrivate}
          onChange={(e) => setIsPrivate(e.target.value)}
        >
          <option value="False">False</option>
          <option value="True">True</option>
        </select>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create Idea</button>
      </form>
    </div>
  );
}
