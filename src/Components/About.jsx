import selfie from "./Images/selfie.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full px-10">
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
        <h1 className="text-white text-center my-10 font-bold sm:text-3xl md:text-4xl lg:text-5xl px-4">
          ABOUT ME
        </h1>
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
      </div>
      <p className="text-center justify-center text-white text-sm sm:text-md md:text-lg my-10 max-w-screen-md mx-5">
        Hello! I'm Brian Bissette, a Full Stack Software Developer based in
        Katy, Texas. My journey in problem-solving and analytical thinking began
        in the U.S. Navy, where I spent countless hours troubleshooting and
        maintaining complex software systems. This experience sparked my love
        for software development and set me on the path I'm on today.
      </p>
      <p className="text-center justify-center text-white text-sm sm:text-md md:text-lg my-10 max-w-screen-md mx-5">
        After my service, I embraced the challenge of becoming a Full Stack
        Developer. My military background instilled in me a deep sense of
        discipline, adaptability, and a continuous learning mindset. I am
        excited about the process of creating robust and scalable solutions,
        continuously evolving with the rapidly changing technology landscape.
      </p>
      <img
        className="w-32 h-32 rounded-full object-contain my-10"
        src={selfie}
        alt="Brian Bissette"
      ></img>
    </div>
  );
};

export default About;
