import Image from "next/image";
import { projects } from "./list";
import ProjectCard from "app/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Check out my projects!",
};

export default function Page() {
  const featuredProjectNodes = projects
    .filter((project) => project.isFeatured)
    .map((project) => <ProjectCard key={project.id} project={project} className="my-2" />);

  const projectListNodes = projects.map((project) => (
    <ProjectCard key={project.id} project={project} className="my-2" />
  ));
  
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <h2 className="font-semibold text-xl mb-8 tracking-tighter">Featured</h2>
      {featuredProjectNodes}
      <h2 className="font-semibold text-xl my-8 tracking-tighter">All Projects</h2>
      {projectListNodes}
    </section>
  );
}
