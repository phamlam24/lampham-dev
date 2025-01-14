import { UpdateType } from "app/classes/about_website/Changelog";
import { changelog, changelogWithVersion } from "./update_data";
import VersionAccordion from "app/components/about_website/VersionAccordion";

export default function Page() {

  let changelogData = changelogWithVersion();

  changelogData.reverse();

  let changelogList = changelogData.map((log) => {
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
