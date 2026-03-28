import { type Tool } from "@models";

export type ExperienceData = {
  id: string;
  title: string;
  company: string;
  priorTitles: string[];
  startDate: string;
  endDate: string;
  description?: string;
  tools?: Tool[];
  link?: string;
};
