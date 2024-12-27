"use client";
import { Card, CardContent, CardActions } from "@mui/material";
import { Project, ProjectStatus } from "app/classes/projects/Project";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

class ProjectCardProps {
  project: Project;
  className: string;
}

const projectStatusChip = new Map([
  [
    ProjectStatus.Building,
    <Chip label="Building" color="warning" size="small" className="mt-px" />,
  ],
  [
    ProjectStatus.Finished,
    <Chip label="Finished" color="success" size="small" className="mt-px" />,
  ],
  [
    ProjectStatus.Refining,
    <Chip label="Refining" color="info" size="small" className="mt-px" />,
  ],
  [
    ProjectStatus.Scrapped,
    <Chip label="Scrapped" color="error" size="small" className="mt-px" />,
  ],
]);

// const projectStatusMapLabel = new Map<ProjectStatus, string>([
//   [ProjectStatus.Building, "Building"],
//   [ProjectStatus.Finished, "Finished"],
//   [ProjectStatus.Refining, "Refining"],
//   [ProjectStatus.Scrapped, "Scrapped"],
// ]);

function getShowDate(date: string | Date): string {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid date";
  }

  const options: Intl.DateTimeFormatOptions = {};

  if (parsedDate.getDate() !== 1) {
    options.day = "numeric";
  }
  if (parsedDate.getMonth() !== 0 || options.day) {
    options.month = "long";
  }
  options.year = "numeric";

  return parsedDate.toLocaleDateString("en-US", options);
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={className}>
      <CardContent>
        <div className="flex flex-row justify-between">
          <h3 className="mb-2 font-semibold tracking-tight text-xl">
            {project.name}
          </h3>
          {projectStatusChip.get(project.status)}
        </div>
        {project.image && (
          <Image
            src={project.image}
            width={500}
            height={500}
            alt="test image"
            className="mb-2 md:max-h-64 w-auto mx-auto"
          />
        )}
        <p>{project.description}</p>
      </CardContent>
      <div className="w-full pr-3 flex flex-row justify-between items-center">
        {project.link && (
          <CardActions className="ml-1">
            <Button
              size="small"
              onClick={() => {
                window.location.href = project.link!;
              }}
            >
              Check It Out
            </Button>
          </CardActions>
        )}
        {project.lastUpdated && (
          <p className="text-sm text-gray-400">Last updated: {getShowDate(project.lastUpdated)}</p>
        )}
      </div>
    </Card>
  );
}
