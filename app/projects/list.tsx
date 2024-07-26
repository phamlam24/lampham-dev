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
    isFeatured: true,
  },
  {
    id: 2,
    name: "My Website",
    description: "The website you are seeing right now!",
    link: "../",
    status: ProjectStatus.Building,
    image: undefined,
    isFeatured: false,
  },
  {
    id: 3,
    name: "Helmet Detection Project",
    description: "Developed a YOLO model to train detecting helmets.",
    link: "https://github.com/phamlam24/CSC245-Helmet-Detection-Test",
    status: ProjectStatus.Finished,
    image: undefined,
    isFeatured: false,
  },
];

