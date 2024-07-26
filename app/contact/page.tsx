import { BlogPosts } from "app/components/BlogPosts";
import { Icon } from "@mui/material";
export const metadata = {
  title: "Contact",
  description: "Contact me!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Contact Me
      </h1>

      <p>Contact me for </p>

      <ul className="text-neutral-200 list-disc [&>*]:ml-4 [&>*]:mt-2">
        <li>jobs/internship opportunities</li>
        <li>projects</li>
      </ul>
      <p className="mt-4">via</p>

      <div className="mt-2 [&>*]:mr-2">
        <Icon baseClassName="fas" className="fa-brands fa-linkedin" />
        <Icon baseClassName="fas" className="fa-solid fa-envelope" />
      </div>

      {/* <BlogPosts /> */}
    </section>
  );
}
