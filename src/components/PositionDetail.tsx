import { type ExperienceData } from "@models";
import type React from "react";

export function PositionDetail({ key, data }: React.PropsWithChildren<{ key: number; data: ExperienceData }>) {
  return (
    <div className="-ml-[8px] mb-16 tracking-tight">
      <h3 className="text-2xl font-bold">
        {data.title} · {data.company}
      </h3>
      {data.priorTitles && data.priorTitles.length > 0 && data.priorTitles.map((title) => <p className="text-sm italic">{title}</p>)}
      <p className="text-sm italic">
        {data.startDate} - {data.endDate}
      </p>
      <p>{data.description}</p>
      {data.tools && data.tools.length > 0 && (
        <ul className="list-disc pl-5">
          {data.tools.map((tool) => (
            <li className="text-sm italic">
              <img src={tool.icon} alt={`${tool.name} icon`} className="inline w-4 h-4 mr-1" />
              {tool.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
