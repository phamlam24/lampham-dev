// THE LIST OF ALL MY PROJECTS. UPDATE AS NEEDED
import { Months } from "app/classes/helper";
import { Project, ProjectShowPriority, ProjectStatus } from "app/classes/projects/Project";

export const projects: Project[] = [
  {
    id: 1,
    name: "SwipeAndFly",
    description: "Plan your next memories with TikTok videos! 🎥✈️🌍",
    link: "https://swipeandfly.world",
    status: ProjectStatus.Finished,
    lastUpdated: new Date(2024, Months.JULY),
    image: "https://ik.imagekit.io/phamlam24/project-swipeandfly.jpg?",
    showPriority: ProjectShowPriority.MEDIUM,
  },
  {
    id: 2,
    name: "My Website",
    description: "The website you are seeing right now!",
    link: "../",
    status: ProjectStatus.Building,
    lastUpdated: new Date(2024, Months.DECEMBER),
    image: undefined,
    showPriority: ProjectShowPriority.LOW,
  },
  {
    id: 3,
    name: "Helmet Detection Project",
    description: "Developed a YOLO model to train detecting helmets.",
    link: "https://github.com/phamlam24/CSC245-Helmet-Detection-Test",
    status: ProjectStatus.Finished,
    lastUpdated: new Date(2023, Months.DECEMBER),
    image: undefined,
  },
  {
    id: 4,
    name: "Young Heroes",
    description: "Safe & Accessible 911 Call Simulation Platform for Kids",
    link: "https://devpost.com/software/young-heroes-hmi2vl",
    status: ProjectStatus.Finished,
    lastUpdated: new Date(2024, Months.SEPTEMBER),
    image: "https://ik.imagekit.io/phamlam24/project-youngheroes.jpg?",
    showPriority: ProjectShowPriority.HIGH,
  },
  {
    id: 5,
    name: "TeachXR",
    description: " World's First AI Study Assistant in Extended Reality ",
    link: "https://devpost.com/software/teachxr",
    status: ProjectStatus.Refining,
    lastUpdated: new Date(2024, Months.OCTOBER),
    image: "https://ik.imagekit.io/phamlam24/project-teachxr.jpg?",
    isFeatured: true,
    showPriority: ProjectShowPriority.HIGH,
  },
  {
    id: 6,
    name: "Realty Wingman",
    description:
      "AI Assistant for Realty Agents when Hosting House Visits for Potential Homebuyers! ",
    link: "https://devpost.com/software/reaity-wingman",
    status: ProjectStatus.Finished,
    lastUpdated: new Date(2024, Months.NOVEMBER),
    image: "https://ik.imagekit.io/phamlam24/project-realtywingman.png?",
    showPriority: ProjectShowPriority.MEDIUM,
  },
  {
    id: 7,
    name: "Thinking in Objects",
    description: "Experimental project in LLMs",
    status: ProjectStatus.Building,
  },
];

