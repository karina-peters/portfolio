// TODO: This file was copied directly from claude - figure out what it's doing and modify it as needed
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Project() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(`/case-studies/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <div>Project not found</div>;
  if (!markdown) return <div>Loading...</div>;

  return (
    <div>
      <header className="flex items-center justify-center pt-16 pb-4">
        <button onClick={() => window.history.back()} className="text-sm">
          ← Back
        </button>
      </header>
      <article>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
}
