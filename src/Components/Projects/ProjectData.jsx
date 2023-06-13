import studysphere from "../../Components/Images/studysphere.png";
import petadopter from "../../Components/Images/petadopter.png";
import botdecimation from "../../Components/Images/botdecimation.png";
import swolldiers from "../../Components/Images/swolldiers.png";
import music from "../../Components/Images/music.png";

export const projects = [
  {
    id: 1,
    title: "Study Sphere",
    description:
      "Study Sphere is a collaborative study app that enables creation and sharing of topics and resources. Its features also promote efficient time management for structured learning.",
    langs: [
      "JavaScript",
      "Vite",
      "Tailwind",
      "Node",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "JWT",
      "Redux",
    ],
    github: [
      {
        type: "Frontend",
        url: "https://github.com/bbissette3/study-sphere",
      },
      {
        type: "Backend",
        url: "https://github.com/bbissette3/study-sphere-api",
      },
    ],
    link: "https://study-sphere.onrender.com",
    image: studysphere,
  },
  {
    id: 2,
    title: "Pet Adopter",
    description:
      "Pet Adopter is an interactive platform that links potential pet owners with adoptable pets from various shelters, encouraging users to share shelter experiences to guide others in their adoption journey.",
    langs: [
      "JavaScript",
      "React",
      "Material UI",
      "Python",
      "Flask",
      "SqlAlchemy",
    ],
    github: [
      {
        type: "FullStack",
        url: "https://github.com/FredPerez15/pet-adopter",
      },
    ],
    link: "https://www.loom.com/share/9eb489ed66ac4521a1db8b8c73b96210",
    image: petadopter,
  },
  {
    id: 3,
    title: "Bot Decimation",
    description:
      "Bot Decimation is a CLI game that offers a dynamic gaming experience with unique character crafting, combat with AI or other players, and an immersive arena mode for a captivating, strategic gameplay.",
    langs: ["Python", "Flask", "SqlAlchemy"],
    github: [
      {
        type: "Backend",
        url: "https://github.com/bbissette3/phase-3-project-group-3",
      },
    ],
    link: "https://www.loom.com/share/1722c223289b49579027c9fb5f48a383",
    image: botdecimation,
  },
  {
    id: 4,
    title: "Swolldiers",
    description:
      "Swolldiers is a fitness application offering a library of exercises with GIFs and difficulty ratings, allowing users to discover, curate, and follow workouts tailored to their fitness level.",
    langs: ["JavaScript", "React", "Auth0", "JSON"],
    github: [
      {
        type: "FullStack",
        url: "https://github.com/bbissette3/phase-2-group-project-swolldiers",
      },
    ],
    link: null,
    image: swolldiers,
  },
  {
    id: 5,
    title: "Music Lover",
    description:
      "Music Lover is a dynamic music management app that allows users to curate their personal music library, rate tracks, and create customized playlists based on preferences, providing a personalized and interactive music journey.",
    langs: ["Javascript", "JSON"],
    github: [
      {
        type: "FullStack",
        url: "https://github.com/bbissette3/group-2-phase-1-project",
      },
    ],
    link: null,
    image: music,
  },
];
