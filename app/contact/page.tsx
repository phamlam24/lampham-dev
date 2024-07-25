import { BlogPosts } from "app/components/BlogPosts";

export const metadata = {
  title: "Contact",
  description: "Contact me!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact Me</h1>
      {/* <BlogPosts /> */}
    </section>
  );
}
