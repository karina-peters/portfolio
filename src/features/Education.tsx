import { type DegreeData, type NodeData } from "@models";
import { Node } from "@components";

const degrees: DegreeData[] = [
  {
    id: "degree-umich-cs",
    degree: "B.S. Computer Science",
    institution: "University of Michigan",
    startDate: "August 2017",
    endDate: "May 2021",
    description: "Minor in Art & Design",
  },
  {
    id: "degree-umd-hci",
    degree: "M.S. Human-Computer Interaction",
    institution: "University of Maryland",
    startDate: "August 2024",
    endDate: "Present",
    description: "Focus on Accessibility and Inclusive Design",
  },
];

export function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="flex flex-col gap-4">
        {degrees.map((degree) => {
          const node: NodeData = {
            title: `${degree.degree} · ${degree.institution}`,
            subtitles: [degree.description],
          };

          return <Node data={node} />;
        })}
      </div>
    </section>
  );
}
