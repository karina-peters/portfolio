export type ContainerData = {
  date?: string;
  content?: string;
  title?: string;
  titleAside?: string;
  subtitles?: string[];
  tags?: string[];
  href?: string;
  links?: { label: string; url: string; external: boolean }[];
};
