import { UpdateType } from "app/classes/about_website/Changelog";
import { changelog } from "./update_data";
import VersionAccordion from "app/components/about_website/VersionAccordion";

export default function Page() {
  let lastVersion: string;
  let versionNameArray = changelog.map((log, index) => {
    const previousVersion = index > 0 ? lastVersion.split('.').map(Number) : [0, 0, 0];
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

  let changelogWithVersion = changelog.map((log, index) => {
    return {
      changelog: log,
      versionName: versionNameArray[index]
    }
  })

  changelogWithVersion.reverse();

  let changelogList = changelogWithVersion.map((log) => {
    return <VersionAccordion key={log.versionName} version={log.changelog} versionString={log.versionName}/>
  });

  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          Website Changelog
        </h1>
        <p>
          This website is currently, highly experimental, and more as a way for
          me to test and learn tools and frameworks. It might load very slow, break things, and change a
          lot. Here should be a changelog of the website.
        </p>
        <br></br>
        <p>
          I used SemVer for this, even though this is not a framework or a tool.
          It just feels right to use like that.
        </p>
      </section>
      <section className="mt-6">
        {changelogList}
      </section>
    </>
  );
}
