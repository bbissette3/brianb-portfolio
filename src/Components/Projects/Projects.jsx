import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectData";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full px-10">
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
        <h1 className="text-white text-center my-10 font-bold sm:text-3xl md:text-4xl lg:text-5xl px-4">
          PROJECTS
        </h1>
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {projects.map((project) => (
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <ProjectCard project={project} key={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
