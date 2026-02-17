import { type DegreeData } from "@models";

const degrees: DegreeData[] = [
  {
    degree: "B.S. Computer Science",
    institution: "University of Michigan",
    startDate: "August 2017",
    endDate: "May 2021",
    description: "",
  },
  {
    degree: "M.S. Human-Computer Interaction",
    institution: "University of Maryland",
    startDate: "August 2024",
    endDate: "Present",
    description: "",
  },
];

export function Education() {
  return (
    <section id="education">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h2 className="text-4xl font-bold">Education</h2>
        {degrees.map((degree, index) => (
          <div key={index} className="w-full max-w-2xl">
            <h3 className="text-2xl font-semibold">
              {degree.degree} · {degree.institution}
            </h3>
            <p className="text-sm text-gray-600">
              {degree.startDate} - {degree.endDate}
            </p>
            <p className="mt-2">{degree.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
