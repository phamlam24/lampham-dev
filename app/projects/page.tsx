import Image from "next/image";
import { projects } from "./list";
import { Card, CardContent } from "@mui/material";
import ProjectCard from "app/components/projects/ProjectCard";

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
      <ProjectCard project={projects[0]}/>
      {/* <Card>
        <CardContent>
          <h3 className="mb-2 font-semibold tracking-tight">SwipeAndFly</h3>
          <Image
            src="https://ik.imagekit.io/phamlam24/project-swipeandfly.jpg?"
            width={500}
            height={500}
            alt="test image"
          />
        </CardContent>
      </Card> */}
    </section>
  );
}
