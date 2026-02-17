import { PositionDetail } from "@components";
import { type ExperienceData } from "@models";

const positions: ExperienceData[] = [
  {
    title: "Software Engineer",
    company: "Thomson Reuters",
    priorTitles: ["Asscociate Software Engineer", "Software Development Intern"],
    startDate: "2019",
    endDate: "Present",
    description: `Lorem ipsum dolor sit amet consectetur. At risus habitasse 
      turpis semper mauris eu. Porta adipiscing lectus urna tortor dignissim nisi 
      eu massa leo. Egestas sed sed amet sed id. Nunc sed nunc aenean in. Donec 
      nunc tristique amet consectetur. Enim sed sed ut elementum. Egestas sed sed 
      amet sed id. Nunc sed nunc aenean in. Donec nunc tristique amet consectetur. 
      Enim sed sed ut elementum.`,
    tools: [],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h2 className="text-4xl font-bold">Experience</h2>
        {positions.map((position, index) => (
          <PositionDetail key={index} data={position} />
        ))}
      </div>
    </section>
  );
}
