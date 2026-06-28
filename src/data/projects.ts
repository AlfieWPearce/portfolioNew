export interface Project {
  title: string;
  description: string;
  link: string;

  tech?: string[];

  category: "pinned" | "recent" | "old";
  layout: "left" | "center" | "right";
  mediaType?: "image" | "video";
  mediaTitle?: string;
}

export const projects: Project[] = [
  {
    title: "Solar System",
    description: "A real-time orbital model built with Three.js, simulating gravitation mechanics using Newtonian physics. I designed the experience to feel tactile and explanatory - planets drifting, shadows shifting, and moting responding subtly to user input. The project taught me how to blend science, maths, and visual storytelling into an interactive environemt. This is a passion project of mine, and as such, will be constantly evolving.",
    link: "https://github.com/AlfieWPearce/Solar-System",
    category: "pinned",
    layout: "right"
  },
  {
    title: "Bridge",
    description: "A full digital version of the card game Bridge, built from scratch - complete with auction logic, scoring rules, and animated card mechanics. The project pushed me into deeper algorithmic thinking and state management, as well as clean UI design inspired by physical playing cards. This is my Computer Science Coursework - and as such, the code will not be available until August 2026.",
    link: "https://github.com/AlfieWPearce/Bridge",
    tech: ["HTML", "CSS", "JS", "Node.js", "Socket.io", "Express", "p5.js"],
    category: "pinned",
    layout: "left",
    mediaType: "image",
    mediaTitle: "BridgeDemo.gif"

  },
  {
    title: "Music Sync",
    description: "A terminal-based music library managed for Linus featuring bulk metadata editing, album artwork management and intelligent synchronisation with portable music platers.",
    link: "https://github.com/AlfieWPearce/MusicSync",
    tech: ["python", "Textual", "Mutagen", "Pillow", "pyudev"],
    category: "pinned",
    layout: "right",
  },
  {
    title: "CLI Mini-Projects (tools for thought and work)",
    description: "A collection of small, cli-focused tools built to explore core software design principles: simplicity, composability, and long-term maintainability. The project deliberately avoids frameworks, databases and heavy abstractions, instead relying on plain text, standard libraries, and Unix-style worflows.",
    link: "https://github.com/AlfieWPearce/cli_mini-projects/tree/stable",
    tech: ["Python"],
    category: "recent",
    layout: "center"
  },
  {
    title: "Particle Simulator",
    description: "A simple SPH inspired Fluid Simulator created to learn c++ and practice vimium-style controls.",
    link: "https://github.com/AlfieWPearce/Particle-Simulator",
    category: "recent",
    tech: ["c++", "Raylib"],
    layout: "right",
    mediaType: "video",
    mediaTitle: "FluidSimulation.mp4"
  },
  {
    title: "Tiny Racer",
    description: "An arcade-style top-down racing game. I focused on the feel of the car racing mechanics. What will be your best time?",
    link: "https://github.com/AlfieWPearce/TinyRacer",
    tech: ["JS"],
    category: "recent",
    layout: "left"
  },
  {
    title: "Boids",
    description: "An experiment with the idea of Boids. Boids is a simple simulation that models the movement of birds in a flock, but can be used for many things, inclduing and not limited to MAVs and UGVs.",
    link: "https://github.com/AlfieWPearce/Boids",
    tech: ["JS", "p5.js"],
    category: "recent",
    layout: "left"
  },
  {
    title: "Ghost Ink Inspector",
    description: "A small experiment that shows hidden Unicode characters (often found in LLM responses) and allows you to copy a cleaned version of your text.",
    link: "https://github.com/AlfieWPearce/GhostInkInspector",
    tech: ["HTML", "CSS", "JS"],
    category: "recent",
    layout: "center"

  },
  {
    title: "Regex Tester",
    description: "A fast, lightweight regular-expression playground for testing patterns live. My goal was clarity: instant feedback, clean visuals and no distractions - something that I wanted, while learning regex myself.",
    link: "https://github.com/AlfieWPearce/RegexTester",
    tech: ["HTML", "CSS", "JS"],
    category: "recent",
    layout: "left"

  },
  {
    title: "Email Harvester",
    description: "A demonstration tool showing how web-scraping algorithms work (and can gather OSINT) - build purely for learning and teaching cybersecurity and OSINT principles. It reinforced the importance of ethical coding and secure web practices.",
    link: "https://github.com/AlfieWPearce/EmailHarvester",
    tech: ["python", "Beautiful Soup"],
    category: "recent",
    layout: "left"

  },
  {
    title: "Draughts",
    description: "A straightforward implementation of the class board game (aka Checkers in the USA), focusing on smooth gameplay, clean logic and simple animations.",
    link: "https://github.com/AlfieWPearce/DraughtsGame",
    tech: ["HTML", "JS", "p5.js"],
    category: "recent",
    layout: "right"
  },
  {
    title: "Deadwood",
    description: "A narrative puzzle-based text adventure, where the player must repair a broken car to escape a quiet, eerie woodland. An early exploration of branching dialogue, inventory systems and environmental storytelling. Made using pair programming for a college competition with a friend (Amelia Botnari) and achieved 2nd place!",
    link: "https://github.com/AlfieWPearce/DeadWood",
    tech: ["HTML", "JS", "p5.js"],
    category: "recent",
    layout: "center"
  },
  {
    title: "Asteroid Shooter",
    description: "An arcade-style shooter created when I was very young - chaotic, colourful, and full of energy. You control a space ship that has to destroy asteroids and survive. How long can you live?",
    link: "https://scratch.mit.edu/projects/944660567",
    tech: ["Scratch"],
    category: "old",
    layout: "left"
  },
  {
    title: "3D Raycaster",
    description: "My first experiment with 3D rendering concepts - a simple Doom-like (more like wolfenstein) engine using raycasting techniques. Writing it taught me that \"fake 3D\" can be far more clever than it looks. This was inspired by games like Doom, Moon and Wolfenstein.",
    link: "https://scratch.mit.edu/projects/941116230",
    tech: ["Scratch"],
    category: "old",
    layout: "right"
  },
  {
    title: "Maze Generator",
    description: "An implementation of recursive backtracking to generate perfect mazes - a small projects with a surprising sense of life as the passageways carve themselves into existence. There is also the choice to set a blacklisted object for the maze to not be generated in.",
    link: "https://scratch.mit.edu/projects/951780397",
    tech: ["Scratch"],
    category: "old",
    layout: "left"
  },
  {
    title: "Firework Simulator",
    description: "My first attempt at a simple particle simulator. It imitates a firework display and creates sound as well as visuals.",
    link: "https://scratch.mit.edu/projects/946226429",
    tech: ["Scratch"],
    category: "old",
    layout: "right"
  }
];
