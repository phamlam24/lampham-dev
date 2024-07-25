// THE LIST OF ALL MY PROJECTS. UPDATE AS NEEDED
import { Project, ProjectStatus } from "app/classes/projects/Project";


export const projects: Project[] = [
  {
    id: 1,
    name: "SwipeAndFly",
    description:
      "Travel planner app using LLM. Built with a team for hackathons!",
    link: "https://swipeandfly.world",
    status: ProjectStatus.Refining,
    image: "https://ik.imagekit.io/phamlam24/project-swipeandfly.jpg?",
  },
  {
    id: 2,
    name: "My Website",
    description: "The website you are seeing right now!",
    link: "https://lampham-devpage.vercel.app/",
    status: ProjectStatus.Building,
    image: undefined,
  },
  {
    id: 3,
    name: "My Website",
    description: "The website you are seeing right now!",
    link: "https://lampham-devpage.vercel.app/",
    status: ProjectStatus.Building,
    image: undefined,
  },
];

