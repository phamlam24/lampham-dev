import { Card, CardContent } from "@mui/material";
import { Project, ProjectStatus } from "app/classes/projects/Project";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { FC } from "react";

class ProjectCardProps {
  project: Project;
}

const projectStatusChip = new Map([
  [ProjectStatus.Building, <Chip label="Building" color="warning" size="small"/>],
  [ProjectStatus.Finished, <Chip label="Finished" color="success" size="small"/>],
  [ProjectStatus.Refining, <Chip label="Refining" color="info" size="small"/>],
  [ProjectStatus.Scrapped, <Chip label="Scrapped" color="error" size="small"/>],
]);

// const projectStatusMapLabel = new Map<ProjectStatus, string>([
//   [ProjectStatus.Building, "Building"],
//   [ProjectStatus.Finished, "Finished"],
//   [ProjectStatus.Refining, "Refining"],
//   [ProjectStatus.Scrapped, "Scrapped"],
// ]);

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="mb-2 font-semibold tracking-tight">{project.name}</h3>
        {project.image && (
          <Image
            src="https://ik.imagekit.io/phamlam24/project-swipeandfly.jpg?"
            width={500}
            height={500}
            alt="test image"
            className="mb-2"
          />
        )}
        {projectStatusChip.get(project.status)}
      </CardContent>
    </Card>
  );
}
