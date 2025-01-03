import { UpdateType, Update } from "app/classes/about_website/Changelog";
import { Months } from "app/classes/helper";

// Hardcode the changelog. This records all updates, and some data about it. Elements are ordered in time.
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
];
