import { type CertData } from "@models";

const certifications: CertData[] = [
  {
    name: "Trusted Tester",
    institution: "Department of Homeland Security",
    date: "2025",
    description: "",
  },
];

export function Certifications() {
  return (
    <section id="certifications">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h2 className="text-4xl font-bold">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="w-full max-w-2xl">
            <h3 className="text-2xl font-semibold">
              {cert.name} · {cert.institution}
            </h3>
            <p className="text-sm text-gray-600">{cert.date}</p>
            <p className="mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
