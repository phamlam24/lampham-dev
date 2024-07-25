// THE LIST OF ALL MY PROJECTS. UPDATE AS NEEDED

enum ProjectStatus {
    Building,
    Refining,
    Finished,
    Scrapped
}

class Project {
    id: Number
    name: String
    description?: String
    link?: String
    status: ProjectStatus
    // lastUpdated: Date
    image?: String // URL
}

export const projects: Project[] = [
  {
    id: 1,
    name: "SwipeAndFly",
    description: "Travel planner app using LLM",
    link: "https://swipeandfly.world",
    status: ProjectStatus.Refining,
    image: undefined,
  },
  {
    id: 2,
    name: "My Website",
    description: "The website you are seeing right now!",
    link: "https://lampham-devpage.vercel.app/",
    status: ProjectStatus.Building,
    image: undefined,
  },
];