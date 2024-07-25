export enum ProjectStatus {
  Building,
  Refining,
  Finished,
  Scrapped,
}

export class Project {
  id: Number;
  name: String;
  description?: String;
  link?: String;
  status: ProjectStatus;
  // lastUpdated: Date
  image?: String; // URL
}