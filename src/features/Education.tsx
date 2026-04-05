import { type DegreeData, type ContainerData } from "@models";
import { Container } from "@components";

const degrees: DegreeData[] = [
  {
    id: "degree-umd-hci",
    degree: "M.S. Human-Computer Interaction",
    institution: "University of Maryland",
    startDate: "2024",
    endDate: "2026",
    description: "Focus on Accessibility and Inclusive Design",
  },
  {
    id: "cert-dhs-tt",
    degree: "Trusted Tester Certification",
    institution: "Department of Homeland Security",
    startDate: "2025",
    endDate: "2025",
    // description: "Evaluation of web content for Section 508 conformance",
  },
  {
    id: "degree-umich-cs",
    degree: "B.S. Computer Science",
    institution: "University of Michigan",
    startDate: "2017",
    endDate: "2021",
    description: "Minor in Art & Design",
  },
];

export function Education() {
  return (
    <section id="education" className="section">
      <h2>Education & Certifications</h2>
      <div className="flex flex-col gap-4">
        {degrees.map((degree) => {
          const node: ContainerData = {
            date: `${degree.startDate}${degree.endDate !== degree.startDate ? ` - ${degree.endDate}` : ""}`,
            title: `${degree.degree}`,
            titleAside: `${degree.institution}`,
            subtitles: degree.description ? [degree.description] : [],
          };

          return <Container data={node} />;
        })}
      </div>
    </section>
  );
}
