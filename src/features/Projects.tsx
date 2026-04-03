import { caseStudies } from "public/case-studies/metadata";
import { Container } from "@components";
import { type ContainerData } from "@models";

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="flex flex-col gap-4">
        {caseStudies.map((project) => {
          const node: ContainerData = {
            date: `${project.startDate} - ${project.endDate}`,
            subtitles: [project.type || "Project"],
            title: `${project.title}`,
            content: project.description,
            // href: `/project/${project.id}`,
            links: [
              { label: "View Case Study", url: `/project/${project.id}`, external: false },
              ...(project.sourceCodeLink ? [{ label: "Source Code", url: project.sourceCodeLink, external: true }] : []),
              ...(project.siteLink ? [{ label: "Live Site", url: project.siteLink, external: true }] : []),
            ],
          };

          return <Container data={node} />;
        })}
      </div>
    </section>
  );
}
