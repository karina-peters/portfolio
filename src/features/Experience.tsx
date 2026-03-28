import { Node, TextNode } from "@components";
import { type ExperienceData, type NodeData } from "@models";

const positions: ExperienceData[] = [
  {
    id: "exp-thomson-reuters",
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
    link: "https://tax.thomsonreuters.com/en/tax-accounting",
  },
];

export function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="flex flex-col gap-4">
        {positions.map((position) => {
          return (
            <Node
                  data={{
                    title: `${position.title} · ${position.company}`,
                    subtitles: position.priorTitles,
                    content: position.description,
                    tags: position.tools?.map((tool) => tool.name),
                    href: position.link,
                  }}
                />
          );
        })}
      </div>
    </section>
  );
}
