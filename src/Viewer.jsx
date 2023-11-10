import React, { useState } from "react";
import Reactmarkdown from "react-markdown";
import "./Viewer.css";

const Viewer = () => {
  const [markdown, Setmarkdown] = useState("Markdown Preview");

  return (
    <main>
      <div className="container heading text-center p-2 text-muted">
        <Reactmarkdown>{`# Markdown Editer`}</Reactmarkdown>
      </div>

      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => Setmarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <Reactmarkdown>{markdown}</Reactmarkdown>
        </article>
      </section>
    </main>
  );
};

export default Viewer;
