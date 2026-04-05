import type React from "react";
import type { ContainerData } from "@models";

export function Container({ data }: React.PropsWithChildren<{ data: ContainerData }>) {
  return (
    <div
      className={`rounded-box ${data.href ? "cursor-pointer" : ""}`}
      role={data.href ? "button" : undefined}
      onClick={() => data.href && window.open(data.href, "_blank")}>
      <div className="box-header">
        {data.title && (
          <h3 className="box-title">
            {data.title}
            {data.titleAside && <span className="title-aside">{` · ${data.titleAside}`}</span>}
            <span className="date-label">{` (${data.date})`}</span>
          </h3>
        )}
        {data.subtitles && data.subtitles.length > 0 && (
          <div className="box-subtitles">
            {data.subtitles.map((subtitle, index) => (
              <span key={index} className="subtitle">
                {subtitle}
              </span>
            ))}
          </div>
        )}
      </div>
      {data.content && <p className="box-content" dangerouslySetInnerHTML={{ __html: data.content }} />}
      {data.links && data.links.length > 0 && (
        <div className="box-footer">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              className={`pill ${link.external ? "secondary" : "primary"}`}>
              {link.label}
              {link.external && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
