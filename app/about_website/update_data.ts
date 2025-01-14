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
  new Update(
    UpdateType.Minor,
    new Date(2025, Months.JANUARY, 14),
    "Front Page Update",
    "Update the front page for more data!",
    [
      "Update front page to also show latest project",
      "Various other bug fixes"
    ]
  )
];

export function changelogWithVersion() {
  let lastVersion: string;

  let versionNameArray = changelog.map((log, index) => {
    const previousVersion =
      index > 0 ? lastVersion.split(".").map(Number) : [0, 0, 0];
    let [major, minor, patch] = previousVersion;
    switch (log.type) {
      case UpdateType.Major:
        major += 1;
        minor = 0;
        patch = 0;
        break;
      case UpdateType.Minor:
        minor += 1;
        patch = 0;
        break;
      case UpdateType.Patch:
        patch += 1;
        break;
    }
    lastVersion = `${major}.${minor}.${patch}`;
    return lastVersion;
  });

  return changelog.map((log, index) => {
    return {
      changelog: log,
      versionName: versionNameArray[index],
    };
  });
}

export function getLatestVersion(): string{
  let versionList = changelogWithVersion();
  return versionList[versionList.length - 1].versionName
}