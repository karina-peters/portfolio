import { Link } from "react-router";
import { caseStudies } from "public/case-studies/metadata";

export function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
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
