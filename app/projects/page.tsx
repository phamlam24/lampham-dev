import Image from "next/image";
import { projects } from "./ProjectList";
import ProjectCard from "app/components/projects/ProjectCard";
import Grid from "@mui/material/Grid";

export const metadata = {
  title: "Projects",
  description: "Check out my projects!",
};

export default function Page() {
  projects.sort(
    (x, y) =>{
      // Sort by featured projects first
      if (x.isFeatured && !y.isFeatured) {
        return -1;
      }
      if (!x.isFeatured && y.isFeatured) {
        return 1;
      }
      
      // After, sort by project show priority. Always put undefined prio lower.
      if (x.showPriority && y.showPriority) {
        return x.showPriority - y.showPriority;
      }
      if (x.showPriority) {
        return -1;
      }
      if (y.showPriority) {
        return 1;
      }
      
      // Finally, sort by date. Always put the undefined date lower.
      if (x.lastUpdated && y.lastUpdated) {
        return y.lastUpdated.getTime() - x.lastUpdated.getTime();
      }
      if (x.lastUpdated) {
        return -1;
      }
      if (y.lastUpdated) {
        return 1;
      }
      return 0;  
    } 
  );

  const featuredProjectNodes = projects
    .filter((project) => project.isFeatured)
    .map((project) => (
      <ProjectCard key={project.id} project={project} className="my-2 w-full" />
    ));

  const projectListNodes = projects.map((project) => (
    <Grid item key={project.id} xl={6} className="w-full">
      <ProjectCard project={project} className="my-2 h-full" />
    </Grid>
  ));

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <h2 className="font-semibold text-xl mb-8 tracking-tighter">
        Featured Projects{" "}
        <i className="text-lg font-normal">(la crème de la crème)</i>
      </h2>
      {featuredProjectNodes}
      <h2 className="font-semibold text-xl my-8 tracking-tighter">
        All Projects
      </h2>
      <Grid container spacing={2}>
        {projectListNodes}
      </Grid>
    </section>
  );
}
