import { Color } from "../../helpers/helper";

export enum ProjectStatus {
  Building,
  Refining,
  Finished,
  Scrapped,
}

export enum ProjectShowPriority {
  HIGH = 2,
  MEDIUM = 1,
  LOW = 0,
}

export class ProjectTag {
  name: string;
  color: Color;
}

export class Project {
  id: number;
  name: string;
  status: ProjectStatus;
  isFeatured?: boolean = false;
  showPriority?: ProjectShowPriority = ProjectShowPriority.LOW;
  lastUpdated?: Date;
  image?: string; // URL
  description?: string;
  link?: string;
}
