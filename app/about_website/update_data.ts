import { UpdateType, Update } from "app/classes/about_website/Changelog";
import { Months } from "app/helpers/date";

// Hardcode the changelog. This records all updates, and some data about it. Elements are ordered in time from oldest to newest.
export const changelog = [
  new Update(
    UpdateType.Minor,
    new Date(2025, Months.JANUARY, 3),
    "First recorded update",
    "This just records all the functionalities of this website",
    [
      "Created preliminary projects, home, contacts, and version control page",
      "Created basic unit testing",
    ]
  ),
  new Update(
    UpdateType.Patch,
    new Date(2025, Months.JANUARY, 6),
    "First patch",
    "Fix some more things in the versioning system",
    [
      "Fix some UI things in projects",
      "Fix some UI things and add more functionality in the version system",
    ]
  ),
];
