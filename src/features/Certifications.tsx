import { type CertData, type ContainerData } from "@models";
import { Container } from "@components";

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
          const node: ContainerData = {
            title: `${cert.name} · ${cert.institution}`,
            subtitles: [cert.description],
          };

          return <Container data={node} />;
        })}
      </div>
    </section>
  );
}
