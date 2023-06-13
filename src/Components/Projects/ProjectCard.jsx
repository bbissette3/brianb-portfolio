const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col border-2 bg-custom-lightblue text-[#2e3239] border-[#2e3239] h-full p-4 rounded-md shadow-md">
      <h2 className="font-bold text-xl mb-2">{project.title}</h2>
      <p className="text-sm mb-2 text-[#2e3239]">{project.description}</p>
      <ul className="flex flex-wrap flex-shrink-0 mb-2">
        {project.langs.map((lang, index) => (
          <li
            key={index}
            className="mr-2 mb-2 bg-[#2e3239] text-sm text-white px-2 rounded"
          >
            {lang}
          </li>
        ))}
      </ul>
      <div className="flex justify-around mt-auto">
        {project.github.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#2e3239] hover:opacity-75 hover:bg-[#1f2124] hover:text-white rounded px-2 py-1"
          >
            {repo.type} Repo
          </a>
        ))}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-[#2e3239] ml-4 hover:opacity-75 hover:bg-[#1f2124] hover:text-white rounded px-2 py-1"
          >
            See Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
