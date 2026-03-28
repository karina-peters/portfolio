import { type CertData, type NodeData } from "@models";
import { Node } from "@components";

const certifications: CertData[] = [
  {
    id: "cert-dhs-tt",
    name: "Trusted Tester",
    institution: "Department of Homeland Security",
    date: "2025",
    description: "",
  },
];

export function Certifications() {
  return (
    <section id="certifications">
      <div className="">
        {certifications.map((cert) => {
          const node: NodeData = {
            title: `${cert.name} · ${cert.institution}`,
            subtitles: [cert.description],
          };

          return <Node data={node} />;
        })}
      </div>
    </section>
  );
}
