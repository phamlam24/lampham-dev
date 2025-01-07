export enum UpdateType {
  Major,
  Minor,
  Patch,
}

export class Update {
  type: UpdateType;
  title: string;
  notes: string | null;
  date: Date;
  details: string[];

  constructor(
    type: UpdateType,
    date: Date,
    title?: string,
    notes?: string,
    details?: string[]
  ) {
    this.type = type;

    if (title) {
      this.title = title;
    } else if (type == UpdateType.Major) {
      this.title = "Major Update";
    } else if (type == UpdateType.Minor) {
      this.title = "Minor Update";
    } else if (type == UpdateType.Patch) {
      this.title = "Patches";
    }

    this.date = date;
    (this.notes = notes ?? null), (this.details = details ?? []);
  }
}
