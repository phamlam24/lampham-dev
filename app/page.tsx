import { BlogPosts } from "app/components/BlogPosts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi! I'm Lam.
      </h1>
      <p className="mb-4">
        {`This website is still under construction. See you soon!`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
