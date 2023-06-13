import { skills } from "./SkillsData";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full px-10">
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
        <h1 className="text-white text-center my-10 font-bold sm:text-3xl md:text-4xl lg:text-5xl px-4">
          SKILLS
        </h1>
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
      </div>
      <div className="grid grid-cols-4 gap-4 px-5">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center p-4">
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-white ">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
