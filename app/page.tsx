import { Typography } from "@mui/material";
import { BlogPosts } from "app/components/BlogPosts";
import ProjectCard from "./components/projects/ProjectCard";
import { projects } from "./projects/ProjectList";

export default function Page() {
  return (
    <section>
      <Typography variant="h1" className="mb-8">
        Hi! I'm Lam.
      </Typography>
      <p className="mb-4 mt-8">
        {`Home to blogs, projects, and more things by me.`}
      </p>
      <p className="mb-4">
        {`Come take a look, read a project, or just to say hi!`}
      </p>
      <p className="mb-6">
        {`This website is still under construction. See you soon!`}
      </p>

      <Typography variant="h1" sx={{marginBottom: "1rem"}}>Featured Project</Typography>
      <ProjectCard
        project={projects.filter((project) => project.isFeatured).at(0)!}
        className=""
      ></ProjectCard>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
