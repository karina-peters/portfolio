import { type CertData } from "@models";

export function CertDetail({ key, data }: React.PropsWithChildren<{ key: number; data: CertData }>) {
  return (
    <div className="-ml-[8px] mb-16 tracking-tight">
      <h3 className="text-2xl font-bold">
        {data.name} · {data.institution}
      </h3>
      <p className="text-sm italic">{data.date}</p>
      <p>{data.description}</p>
    </div>
  );
}
