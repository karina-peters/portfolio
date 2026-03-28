import type React from "react";
import type { NodeData } from "@models";

const nodeStyle = "bg-white text-neutral-90 rounded-md outline-2 outline-neutral-90";

export function Node({ data }: React.PropsWithChildren<{ data: NodeData }>) {
  return (
    <div
      className={`${nodeStyle} px-8 py-6 ${data.href ? "cursor-pointer" : ""}`}
      role={data.href ? "button" : undefined}
      onClick={() => data.href && window.open(data.href, "_blank")}>
      <div className="">
        {data.title && <div className="font-mono text-neutral-90 font-medium">{data.title}</div>}
        {data.subtitles &&
          data.subtitles.length > 0 &&
          data.subtitles.map((subtitle, index) => (
            <div key={index} className="font-mono text-neutral-70">
              {subtitle}
            </div>
          ))}
      </div>
      {data.content && <div className="mt-6">{data.content}</div>}
    </div>
  );
}

export function TextNode({ data }: React.PropsWithChildren<{ data: NodeData }>) {
  return <div className={`${nodeStyle} text-nowrap px-4 py-2`}>{data.content}</div>;
}
