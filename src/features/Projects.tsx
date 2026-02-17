import { Link } from "react-router";
import { caseStudies } from "public/case-studies/metadata";

export function Projects() {
  return (
    <section id="projects">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <ul>
        {caseStudies.map((cs) => (
          <li key={cs.id}>
            <Link to={`/project/${cs.id}`}>{cs.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
