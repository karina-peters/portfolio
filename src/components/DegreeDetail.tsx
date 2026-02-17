import { type DegreeData } from "@models";

export function DegreeDetail({ key, data }: React.PropsWithChildren<{ key: number; data: DegreeData }>) {
  return (
    <div className="-ml-[8px] mb-16 tracking-tight">
      <h3 className="text-2xl font-bold">
        {data.degree} · {data.institution}
      </h3>
      <p className="text-sm italic">
        {data.startDate} - {data.endDate}
      </p>
      <p>{data.description}</p>
    </div>
  );
}
