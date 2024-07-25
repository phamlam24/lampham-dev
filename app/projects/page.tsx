import { BlogPosts } from "app/components/BlogPosts";
import Image from "next/image";
import { projects } from "./list";

export const metadata = {
  title: "Projects",
  description: "Check out my projects!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <h2 className="font-semibold text-xl mb-8 tracking-tighter">Featured</h2>
      <Image
        src="https://ik.imagekit.io/phamlam24/default-image.jpg"
        width={300}
        height={500}
        alt="test image"
      />
      {/* <BlogPosts /> */}
    </section>
  );
}
