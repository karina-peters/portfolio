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
            {data.title} · <span className="title-aside">{data.titleAside && `${data.titleAside} `}</span>
            <span className="date-label">({data.date})</span>
          </h3>
        )}
        {data.subtitles &&
          data.subtitles.length > 0 &&
          data.subtitles.map((subtitle, index) => (
            <span key={index} className="subtitle">
              {subtitle}
            </span>
          ))}
      </div>
      {data.content && <p className="box-content" dangerouslySetInnerHTML={{ __html: data.content }} />}
      {data.links && data.links.length > 0 && (
        <div className="box-links">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              className={`pill ${link.external ? "secondary" : "primary"}`}>
              {link.label}
              {link.external && (
                <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.5835 7.08301L15.8335 0.833008M15.8335 0.833008H11.6668M15.8335 0.833008V4.99967M15.8335 9.99967V14.1663C15.8335 14.6084 15.6579 15.0323 15.3453 15.3449C15.0328 15.6574 14.6089 15.833 14.1668 15.833H2.50016C2.05814 15.833 1.63421 15.6574 1.32165 15.3449C1.00909 15.0323 0.833496 14.6084 0.833496 14.1663V2.49967C0.833496 2.05765 1.00909 1.63372 1.32165 1.32116C1.63421 1.0086 2.05814 0.833008 2.50016 0.833008H6.66683"
                    stroke="currentColor"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
