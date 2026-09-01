import { projectsData } from "./portfolioData";

export const caseStudiesData = projectsData.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
