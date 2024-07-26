export enum ProjectStatus {
  Building,
  Refining,
  Finished,
  Scrapped,
}

export class Project {
  id: number;
  name: string;
  description?: string;
  link?: string;
  status: ProjectStatus;
  // lastUpdated: Date
  image?: string; // URL
  isFeatured: boolean
}