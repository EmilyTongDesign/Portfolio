
/* ===========================================
   EMILY TONG - INTERACTIVE PORTFOLIO
=========================================== */

/* ===========================================
   PROJECT CONTENT
=========================================== */

const PROJECTS = [
  {
    id: "modeling",
    title: "3D Modeling - Genshin Impact Bow",
    boardTitle: "3D Modeling",
    date: "Spring 2026",
    categories: ["art"],
    label: "3D Modeling / Digital Art",
    symbol: "◈",
    image: "img/3d-modeling-midterm/3d-modeling-final.jpg",
    rotation: -4,

    summary:
      "Recreating a bow from the game Genshin Impact in Autodesk Maya as my first exploration of polygon modeling.",

    role: "3D Modeling & Design",
    tools: "Autodesk Maya",

    overview: `For my 3D Modeling midterm, we had the freedom to create any object of our 
    choice using Autodesk Maya. I decided to recreate a bow from Genshin Impact, 
    a game I've always enjoyed playing. One of the things I've always admired 
    about the game is how much thought goes into its designs, from the intricate 
    details to the way each object has its own personality. I wanted to challenge 
    myself to recreate that same level of detail in my own work.
    
    Coming from an engineering background, I was more familiar with CAD software, where precision and functionality are often the main priorities. This project gave me an opportunity to explore a different side of 3D modeling, one that focused more on artistic expression and the creative possibilities of digital forms.`,

    process: `I started by studying a reference image of the bow and breaking its design into smaller, 
    more manageable pieces. What initially looked like an overwhelming amount of detail became much easier 
    to approach once I started identifying the individual shapes and understanding how they fit together.

    Since I was still relatively new to Maya, I had to experiment with different tools and techniques to recreate the bow's curved forms, 
    overlapping elements, and decorative details. Unlike traditional CAD modeling, 
    where I was used to working with exact dimensions and geometric constraints, 
    Maya encouraged me to think more visually and focus on how the different forms came together.

    There was a lot of trial and error throughout the process, but I found myself applying the 
    same problem-solving mindset I had developed through engineering. By breaking down a complicated design
    into smaller challenges, I was able to gradually bring everything together while becoming 
    more comfortable with a new creative tool.`,

    outcome: `By the end of the project, I had created a digital model of the bow and put together a showcase video to highlight the final design.

    What made this project meaningful to me was that it allowed me to bring together two sides of design that I had previously approached separately. My experience with CAD taught me to think about structure, precision, and how individual components come together, while Maya introduced me to a more expressive way of exploring shapes and details.`,

    media: [
      {
        type: "image",
        src: "img/3d-modeling-midterm/3d-modeling-reference.JPG",
        caption:
          "Original Genshin Impact bow reference used for modeling inspiration. Reference artwork is not my own."
      },
      {
        type: "video",
        src: "img/3d-modeling-midterm/3d-modeling-final.mp4",
        caption:
          "Final Autodesk Maya model showcase demonstrating the completed form and decorative details."
      }
    ]
  },

  {
    id: "perseverance",
    title: "Rogue Aerospace - Painting a Rocket",
    boardTitle: "Rocket Painting",
    date: "Spring 2026",
    categories: ["art"],
    label: "Art & Creative / Rocket Painting",
    symbol: "🚀",
    image:
      "img/perseverance-rocket-painting/perseverance-final-assembled.jpg",
    rotation: 3,

    summary:
      "Combining artistic expression with engineering and fabrication through the painting of Perseverance, New York University's first full-scale hybrid-fueled rocket.",

    role: "Rocket Painting, Visual Design, & Airframe Fabrication",
    tools:
      "Composite Airframe Layup, Cricut, Precision Knife, Vinyl Stencils, Spray Painting",

overview: `As part of Rogue Aerospace, NYU's collegiate rocketry team, I wanted to bring a sense of visual identity back to our rockets after noticing that the team hadn't painted one in quite some time.

The opportunity came with Perseverance, the team's first full-scale hybrid-fueled rocket, standing over 15 feet tall. I took on the challenge of designing and painting its exterior while also contributing to the manufacturing of its airframe.

What excited me most about this project was the opportunity to combine both the technical and artistics sides to create something that reflected the team's identity and the significance of this milestone.`,

process: `I started by thinking about how the rocket's design could tell a story about the team and what Perseverance represented. I made its name the centerpiece using large, bold lettering, while incorporating cherry blossoms inspired by the trees that bloom around NYU Tandon during the spring. To me, they symbolized growth and new beginnings, which felt especially fitting for the team's first full-scale hybrid rocket.

Near the fins, I also included a design inspired by the Brooklyn Bridge as a way to represent the team's connection to Brooklyn.

Alongside developing the visual design, I participated in the composite airframe layup process, which gave me a better understanding of how the rocket was constructed and how that would affect the painting process. With a rocket standing over 15 feet tall, I had to think carefully about the materials, application methods, and durability of the finish.

I created vinyl stencils using a combination of hand-cutting with a precision knife and a Cricut machine. Some of the more intricate details required careful cutting, and applying larger stencils around the curved airframe came with its own challenges. There was a lot of adjusting and problem-solving along the way, especially when trying to make sure the design looked consistent across the different sections of the rocket.`,

outcome: `Seeing the finished painted components come together as part of the assembled rocket was one of the most rewarding parts of this experience.

What I appreciated most was being able to give an engineering project a more personal and creative identity. The rocket was already an impressive technical achievement, but I wanted its appearance to tell a story about the people, place, and effort behind it.`,

    media: [
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-design-sketch.png",
        caption:
          "Initial rocket painting design of Perseverance."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-airframe-layup-01.jpg",
        caption:
          "Participating in the composite airframe layup process."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-airframe-layup-02.jpeg",
        caption:
          "A fabricated rocket airframe component before painting."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-stencil.jpg",
        caption:
          "Prepared stencil artwork for the rocket design."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-stencil-applied.jpg",
        caption:
          "The painted and stenciled design applied to the rocket's curved surface."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-painted-parts.jpg",
        caption:
          "Standing alongside the painted rocket components before final assembly."
      },
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-final-assembled.jpg",
        caption:
          "The assembled Perseverance rocket with the team's graduating leads."
      }
    ]
  },

  {
    id: "baby-rocket",
    title: "Rogue Aerospace - Baby Rocket",
    boardTitle: "Baby Rocket",
    date: "Spring 2026",
    categories: ["engineering"],
    label: "Engineering / Rocketry / Prototyping",
    symbol: "↟",
    image: "img/baby-rocket/baby-rocket-solidworks.png",
    rotation: -3,

    summary:
      "Independently designing, simulating, fabricating, and successfully launching a model rocket to over 1,000 feet.",

    role: "CAD Design, Simulation, & Fabrication",
    tools: "SolidWorks, OpenRocket, 3D Printing",


overview: `When I first joined Rogue Aerospace, NYU's collegiate rocketry team, I had very little experience with rockets or the engineering principles behind them. While I was excited to contribute to the team, I also wanted to understand how the different components of a rocket worked together beyond what I was learning from my subteam. To challenge myself, I decided to design and launch my own small-scale model rocket.

My goal was to take the project through every stage, from modeling and simulation to fabrication, launch, and recovery.`,


process: `I started by modeling the rocket in SolidWorks, thinking carefully about how the different components would fit together within its relatively small body. I then used OpenRocket to simulate its flight behavior and make adjustments to the design before moving on to fabrication.

One of the biggest challenges was making sure that what I designed digitally could be accurately translated into a physical rocket. Since the simulations relied on specific dimensions and measurements, I had to be mindful of how even small differences between the digital model and the actual rocket could affect its flight performance. This meant carefully translating measurements from OpenRocket into SolidWorks and considering how those dimensions would carry over into the fabrication process.

Another challenge was figuring out the recovery system. Because the rocket was relatively small, there wasn't much room to work with, and I had to find a way to fit the parachute inside while still making sure it could deploy properly during flight.

After refining the design through multiple simulations and adjustments, I fabricated the rocket using 3D printing and prepared it for its first launch.`,

outcome: `After going through the entire design and fabrication process, my rocket successfully launched to an altitude of over 1,000 feet and was recovered afterward.

I was especially proud to be the only member of the team to achieve a successful launch during our baby rocket activity. Having started the project with very little knowledge of rocketry, seeing something I designed and built actually take flight was an incredibly rewarding experience.

Beyond the successful launch, this project helped me understand how much thought goes into making a design work in the real world. I learned that even when something looks good in a CAD model or performs well in a simulation, there are still physical constraints and unexpected challenges to consider.`,

    media: [
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-solidworks.png",
        caption:
          "SolidWorks CAD model of the designed rocket."
      },
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-3d-print.jpg",
        caption:
          "The fabricated 3D-printed model rocket."
      },
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-sanding.JPG",
        caption:
          "Preparing and finishing the rocket before launch."
      },
      {
        type: "video",
        src: "img/baby-rocket/baby-rocket-launch.mp4",
        caption:
          "Successful launch of the rocket, which reached over 1,000 feet."
      },
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-portrait.JPG",
        caption:
          "Photograph taken during the launch."
      },
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-recovery.jpg",
        caption:
          "Recovering the rocket after its successful flight."
      }
    ]
  },

  {
    id: "arc",
    title: "ARC Robotics - Supercap Mount",
    boardTitle: "ARC Robotics",
    date: "Spring 2026",
    categories: ["engineering"],
    label: "Engineering / Mechanical Design / Robotics",
    symbol: "⚙",
    image: "img/arc-robotics/arc-supercap-mounted.jpg",
    rotation: 3,

    summary:
      "Designing a modular two-part mounting system for a supercapacitor on ARC Robotics' Hero Robot.",

    role: "Electronics Mounting & Mechanical Design",
    tools: "CAD Modeling (Onshape), 3D Printing, Threaded Inserts",


overview: `During the 2025-2026 competition season, I worked in NYU's ARC Robotics: Team Ultraviolet to design mounting components for various electronics on our Hero Robot chassis.

One of the more challenging components I worked on was the supercapacitor. Because of its size and the amount of wiring connected to it, I wanted to create a mount that would not only protect the electronics during competition, but also make it easier for my teammates to install, remove, and maintain them without having to take apart the entire assembly.`,

process: `One of the biggest challenges was finding a balance between protection, accessibility, and wire management within the limited space of the chassis. While it would have been easier to design a single-piece mount that simply held everything in place, I started thinking about how inconvenient that would be whenever someone needed to access the electronics.

With that in mind, I developed a modular two-part system. The outer mount would remain secured to the chassis, while the inner component holder could slide in and out without having to unscrew the entire assembly. This allowed the supercapacitor to remain protected while making it much easier to access the electronics and manage the wiring.

I also incorporated threaded inserts to create secure fastening points that could withstand repeated assembly and disassembly. Since the robot would be competing in an environment where impacts and flying projectiles were possible, I designed thicker outer walls to provide an additional layer of protection.

Throughout the process, I created prototype prints and made adjustments to the design based on how the components fit together and interacted with the surrounding chassis.`,


outcome: `The final design was a mounting system that securely housed the supercapacitor within a protective enclosure while still allowing for easy access when needed.

What stood out to me most about this project was realizing how important it is to approach design from multiple perspectives. From an engineering standpoint, the mount needed to securely hold and protect the electronics, but from the perspective of my teammates, it also needed to be easy to work assemble and maintain. Having to come up with more creative solutions to address both perspectives is what I enjoyed working on.`,

    media: [
      {
        type: "image",
        src: "img/arc-robotics/arc-hero-robot.jpg",
        caption:
          "ARC Robotics' Hero Robot from the 2025-2026 competition season."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-prototype.jpg",
        caption:
          "Early prototype of the supercapacitor mounting system."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-final-01.jpg",
        caption:
          "Final printed mounting components, first view."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-final-02.jpg",
        caption:
          "Final printed mounting components, alternate view."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-inner-electronics.jpg",
        caption:
          "Supercapacitor electronics secured to the removable inner holder."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-assembled.jpg",
        caption:
          "The inner component inserted into the protective outer mounting assembly."
      },
      {
        type: "image",
        src: "img/arc-robotics/arc-supercap-mounted.jpg",
        caption:
          "Completed supercapacitor mount installed on the Hero Robot."
      }
    ]
  },

  {
    id: "installation",
    title:
      "Hands-On Fabrication Studio - Taking Up Space Installation",
    boardTitle: "Taking Up Space",
    date: "Fall 2026",
    categories: ["art"],
    label: "Art / Installation / Fabrication",
    symbol: "✿",
    image:
      "img/taking-up-space-installation/installation-cropped-view.jpg",
    rotation: -3,

    summary:
      "A collaborative mixed-media installation exploring individuality, conformity, and self-expression through soft fabric and rigid acrylic.",

    role: "Collaborative Concept, Design, & Fabrication",
    collaborator: "Celine Ho",
    tools:
      "Adobe Illustrator, Laser Cutting, Acrylic, Organza, Sewing, Aluminum Wire, Vinyl",


overview: `Taking Up Space is a mixed-media installation I created with Celine Ho for our fabrication course midterm. The piece explores the journey of finding our individuality in a world where we often feel pressured to fit into certain expectations.

At the center of the installation is a rigid acrylic box, representing the boundaries and expectations society places on us. Fabric rises from the floor and gradually makes its way into the box, symbolizing the uncertainty that comes with discovering who we are. As it moves through the structure, the fabric begins to conform to its boundaries before eventually breaking outward with vibrant colors, representing the freedom to express our individuality.

We wanted to explore how contrasting materials could tell this story without relying on words. By combining the rigid, geometric structure of acrylic with the soft, flowing nature of fabric, we hoped to communicate the tension between fitting in and finding the confidence to be ourselves.`,

process: `One of our biggest challenges was figuring out how to bring together materials with very different properties while making sure each one contributed to the overall story we wanted to tell.

We started by designing the acrylic box in Adobe Illustrator, laser cutting the individual panels, and assembling them using acrylic cement. We also applied holographic vinyl to selected surfaces.

The fabric was an interesting challenge because we wanted it to appear soft and free-flowing while still holding specific shapes. This was my first time using a sewing machine, so I had to learn how different fabrics behaved and how to adjust my techniques accordingly. For the organza, we stitched wide channels that allowed aluminum wire to pass through, giving us the flexibility to shape the fabric into curved, organic forms. The stretchier black fabric presented a different challenge, requiring us to adjust the sewing machine's tension to achieve consistent stitching.

Installing the piece also required more technical problem-solving than I initially expected. We used fishing wire to suspend the acrylic box and individual fabric components, but distributing the weight evenly became difficult as the heavier fabrics caused the structure to tilt. We experimented with different suspension points and adjusted the wire-supported fabric until we achieved the composition we envisioned.

Throughout the process, we had to find a balance between the artistic vision and the physical limitations of our materials. Every adjustment involved thinking about both how the installation would look and how we could actually make it work.`,

outcome: `The final installation brought together rigid acrylic, flowing fabric, and vibrant colors to tell a story about the journey from conformity to individuality.

What made this project meaningful to me was that I was able to gain a much greater appreciation for the technical side of artistic fabrication. Before this project, I hadn't realized how much problem-solving could go into something like sewing or arranging fabric. From adjusting stitch tension to balancing the weight of suspended materials, I found myself applying the same analytical thinking I use in engineering to solve creative challenges.`,

    media: [
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-acrylic-box.jpg",
        caption:
          "Laser-cut acrylic box assembled before applying holographic vinyl."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-acrylic-vinyl.jpg",
        caption:
          "Acrylic box after applying holographic vinyl."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-wire-boning-01.jpg",
        caption:
          "Wire-supported organza created through stitched channels."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-wire-boning-02.jpg",
        caption:
          "Black fabric component prepared with structural boning."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-closeup-01.jpg",
        caption:
          "Detail showing the relationship between black fabric, acrylic, and geometric elements."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-closeup-02.jpg",
        caption:
          "Close-up of flowing organza and wire-supported forms."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-top-view.jpg",
        caption:
          "Wider view of the installation and its spatial composition."
      },
      {
        type: "image",
        src:
          "img/taking-up-space-installation/installation-cropped-view.jpg",
        caption:
          "Final composition of the installation."
      }
    ]
  }
];

/* ===========================================
   VISITOR STORAGE
=========================================== */

/*
  v5 gives the updated corkboard positions a fresh
  starting layout. This does not delete older
  versions of a visitor's saved preferences.
*/
const STORAGE_PREFIX = "emily-portfolio-v5-";

function load(key, fallback) {
  try {
    const stored = localStorage.getItem(STORAGE_PREFIX + key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(
      STORAGE_PREFIX + key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.warn("Local storage unavailable:", error);
  }
}

const DEFAULT_QUOTE =
  "What makes you risk it all just to feel alive? - TWS";

const DEFAULT_TODOS = [
  { text: "Bake a strawberry shortcake 🍓", done: false },
  { text: "Design something new ♡", done: false },
  { text: "Paint another rocket 🚀", done: false }
];

let positions = load("positions", {});
let stickers = load("stickers", []);
let customNotes = load("notes", []);
let todos = load(
  "todos",
  DEFAULT_TODOS.map(item => ({ ...item }))
);

let lightsOn = load("lights", false);
let simpleMode = load("simple-mode", false);
let trashMode = false;
let selectedSticker = null;

let activeDrag = null;
let bankDrag = null;

/* ===========================================
   DOM REFERENCES
=========================================== */

const board = document.getElementById("corkboard");
const boardProjects = document.getElementById("board-projects");
const stickerLayer = document.getElementById("placed-stickers");
const noteLayer = document.getElementById("custom-notes");
const stickerPanel = document.getElementById("sticker-panel");
const ghost = document.getElementById("sticker-ghost");
const trashButton = document.getElementById("trash-toggle");

const modeButton = document.getElementById("mode-toggle");
const lightsButton = document.getElementById("lights-toggle");

const workspace = document.getElementById("workspace");
const simpleHome = document.getElementById("simple-home");
const homeLayout = document.querySelector(".home-layout");

/* ===========================================
   BOARD POSITIONS
=========================================== */

/*
  More space between project cards:
  - Three projects across the upper half
  - Two projects across the lower half
  - Quote and to-do list above the project cards
  - Decorations near the bottom corners

  The full project titles appear on the Projects page.
  Short board titles keep Polaroids compact.
*/

const desktopPositions = {
  quote: [11, 13],
  todo: [88, 14],

  modeling: [22, 40],
  perseverance: [50, 40],
  "baby-rocket": [78, 40],

  arc: [32, 77],
  installation: [69, 77],

  pastry: [10, 83],
  blossom: [91, 83]
};

const tabletPositions = {
  quote: [12, 13],
  todo: [88, 14],

  modeling: [21, 40],
  perseverance: [50, 40],
  "baby-rocket": [79, 40],

  arc: [31, 77],
  installation: [69, 77],

  pastry: [9, 85],
  blossom: [92, 85]
};

const phonePositions = {
  quote: [26, 10],
  todo: [74, 11],

  modeling: [26, 31],
  perseverance: [74, 31],

  "baby-rocket": [26, 54],
  arc: [74, 54],

  installation: [50, 78],

  pastry: [16, 94],
  blossom: [85, 94]
};

function layoutKey() {
  if (window.innerWidth < 768) return "phone";
  if (window.innerWidth < 1200) return "tablet";
  return "desktop";
}

function defaultPosition(id) {
  const layouts = {
    desktop: desktopPositions,
    tablet: tabletPositions,
    phone: phonePositions
  };

  return layouts[layoutKey()][id] || [50, 50];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setPosition(element, x, y) {
  element.style.left = x + "%";
  element.style.top = y + "%";
  element.dataset.x = String(x);
  element.dataset.y = String(y);
}

/*
  Allow room around the edges, especially above the
  to-do list so its decorative tape isn't clipped.
*/
function boundPosition(element, x, y) {
  const width = Math.max(board.clientWidth, 1);
  const height = Math.max(board.clientHeight, 1);

  const halfWidth = element.offsetWidth / width * 50;
  const halfHeight = element.offsetHeight / height * 50;

  const horizontalMargin = 8 / width * 100;
  const verticalMargin = 18 / height * 100;

  const minX = Math.min(50, halfWidth + horizontalMargin);
  const maxX = Math.max(50, 100 - halfWidth - horizontalMargin);

  const minY = Math.min(50, halfHeight + verticalMargin);
  const maxY = Math.max(50, 100 - halfHeight - verticalMargin);

  return {
    x: clamp(x, minX, maxX),
    y: clamp(y, minY, maxY)
  };
}

function placeStaticItems() {
  const stored = positions[layoutKey()] || {};

  board.querySelectorAll(
    ".board-item:not(.placed-sticker):not(.user-note)"
  ).forEach(item => {
    const id = item.dataset.id;
    const fallback = defaultPosition(id);

    const position = stored[id] || {
      x: fallback[0],
      y: fallback[1]
    };

    const bounded = boundPosition(
      item,
      position.x,
      position.y
    );

    setPosition(item, bounded.x, bounded.y);
  });
}

function storeItemPosition(item) {
  const x = Number(item.dataset.x);
  const y = Number(item.dataset.y);

  if (item.dataset.stickerId) {
    const sticker = stickers.find(
      entry => entry.id === item.dataset.stickerId
    );

    if (sticker) {
      sticker.x = x;
      sticker.y = y;
      save("stickers", stickers);
    }
    return;
  }

  if (item.dataset.noteId) {
    const note = customNotes.find(
      entry => entry.id === item.dataset.noteId
    );

    if (note) {
      note.x = x;
      note.y = y;
      save("notes", customNotes);
    }
    return;
  }

  const key = layoutKey();

  if (!positions[key]) {
    positions[key] = {};
  }

  positions[key][item.dataset.id] = { x, y };
  save("positions", positions);
}

/* ===========================================
   IMAGE HELPERS
=========================================== */

function createImage(path, alt) {
  const image = document.createElement("img");

  image.src = path;
  image.alt = alt;
  image.loading = "lazy";
  image.decoding = "async";
  image.draggable = false;

  image.addEventListener("error", () => {
    image.alt = "Image unavailable: " + alt;
  });

  return image;
}

function createProjectArtwork(project, className) {
  const wrapper = document.createElement("div");
  wrapper.className = className;

  if (project.image) {
    wrapper.appendChild(
      createImage(project.image, project.title)
    );
  } else {
    const symbol = document.createElement("span");
    symbol.textContent = project.symbol;
    symbol.setAttribute("aria-hidden", "true");
    wrapper.appendChild(symbol);
  }

  return wrapper;
}

/* ===========================================
   CORKBOARD PROJECTS
=========================================== */

function renderBoardProjects() {
  boardProjects.replaceChildren();

  PROJECTS.forEach(project => {
    const card = document.createElement("article");

    card.className = "board-item board-project";
    card.dataset.id = project.id;
    card.style.setProperty(
      "--rotation",
      project.rotation + "deg"
    );

    const pin = document.createElement("span");
    pin.className = "pushpin";
    pin.textContent = "●";
    pin.setAttribute("aria-hidden", "true");

    const title = document.createElement("h3");
    title.textContent = project.boardTitle;

    const description = document.createElement("p");
    description.textContent = project.date;

    const link = document.createElement("a");
    link.href = "#project/" + project.id;
    link.textContent = "View Project ↗";
    link.setAttribute(
      "aria-label",
      "View " + project.title
    );

    card.append(
      pin,
      createProjectArtwork(project, "project-art"),
      title,
      description,
      link
    );

    boardProjects.appendChild(card);
  });

  placeStaticItems();
}

/* ===========================================
   TRASH FUNCTIONALITY
=========================================== */

function insideTrash(clientX, clientY) {
  const rect = trashButton.getBoundingClientRect();

  return (
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom
  );
}

function isRemovable(item) {
  return Boolean(
    item &&
    (item.dataset.stickerId || item.dataset.noteId)
  );
}

function removeBoardObject(item) {
  if (item.dataset.stickerId) {
    stickers = stickers.filter(
      entry => entry.id !== item.dataset.stickerId
    );

    save("stickers", stickers);
    renderStickers();
  }

  if (item.dataset.noteId) {
    customNotes = customNotes.filter(
      entry => entry.id !== item.dataset.noteId
    );

    save("notes", customNotes);
    renderCustomNotes();
  }
}

function setTrashMode(enabled) {
  trashMode = enabled;

  trashButton.classList.toggle(
    "trash-active",
    enabled
  );

  board.classList.toggle(
    "trash-mode",
    enabled
  );

  trashButton.setAttribute(
    "aria-pressed",
    String(enabled)
  );

  trashButton.textContent = enabled
    ? "♻ Tap Item to Delete"
    : "♻ Trash";
}

trashButton.addEventListener("click", () => {
  setTrashMode(!trashMode);
});

/*
  Remove only visitor-created stickers and Post-its.
  The original five projects are protected.
*/
board.addEventListener("click", event => {
  if (!trashMode) return;

  const item = event.target.closest(".board-item");

  if (item && isRemovable(item)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    removeBoardObject(item);
  }
}, true);

/* ===========================================
   DRAG BOARD ITEMS
   MOUSE + TOUCH + APPLE PENCIL
=========================================== */

board.addEventListener("pointerdown", event => {
  if (trashMode || bankDrag || selectedSticker) return;

  if (
    event.pointerType === "mouse" &&
    event.button !== 0
  ) {
    return;
  }

  if (event.target.closest(
    "a, button, textarea, input, label"
  )) {
    return;
  }

  const item = event.target.closest(".board-item");

  if (!item) return;

  activeDrag = {
    item,
    pointerId: event.pointerId,
    pointerX: event.clientX,
    pointerY: event.clientY,
    startX: Number(item.dataset.x),
    startY: Number(item.dataset.y),
    width: board.clientWidth,
    height: board.clientHeight
  };

  item.classList.add("dragging");

  try {
    item.setPointerCapture(event.pointerId);
  } catch {}

  event.preventDefault();
});

board.addEventListener("pointermove", event => {
  if (
    !activeDrag ||
    activeDrag.pointerId !== event.pointerId
  ) {
    return;
  }

  const dx = event.clientX - activeDrag.pointerX;
  const dy = event.clientY - activeDrag.pointerY;

  const x = activeDrag.startX +
    dx / activeDrag.width * 100;

  const y = activeDrag.startY +
    dy / activeDrag.height * 100;

  const bounded = boundPosition(
    activeDrag.item,
    x,
    y
  );

  setPosition(
    activeDrag.item,
    bounded.x,
    bounded.y
  );

  trashButton.classList.toggle(
    "drop-ready",
    isRemovable(activeDrag.item) &&
    insideTrash(event.clientX, event.clientY)
  );
});

function finishBoardDrag(event) {
  if (
    !activeDrag ||
    event.pointerId !== activeDrag.pointerId
  ) {
    return;
  }

  const item = activeDrag.item;

  const droppedInTrash =
    event.type === "pointerup" &&
    isRemovable(item) &&
    insideTrash(event.clientX, event.clientY);

  item.classList.remove("dragging");
  trashButton.classList.remove("drop-ready");

  try {
    if (item.hasPointerCapture(event.pointerId)) {
      item.releasePointerCapture(event.pointerId);
    }
  } catch {}

  if (droppedInTrash) {
    removeBoardObject(item);
  } else {
    storeItemPosition(item);
  }

  activeDrag = null;
}

board.addEventListener("pointerup", finishBoardDrag);
board.addEventListener("pointercancel", finishBoardDrag);

/* ===========================================
   STICKER BANK WITH VISIBLE WASHI DRAGGING
=========================================== */

function isWashi(symbol) {
  return (
    symbol === "washi-pink" ||
    symbol === "washi-sage"
  );
}

function createStickerGraphic(symbol) {
  const graphic = document.createElement("span");

  if (isWashi(symbol)) {
    graphic.className = "placed-washi " + symbol;
    graphic.setAttribute(
      "aria-label",
      symbol === "washi-pink"
        ? "Pink washi tape"
        : "Sage washi tape"
    );
  } else {
    graphic.textContent = symbol;
  }

  return graphic;
}

/*
  The ghost follows the exact pointer coordinates,
  and washi tape receives a visible background.
*/
function showGhost(symbol, x, y) {
  ghost.className = isWashi(symbol)
    ? "washi-ghost " + symbol
    : "";

  ghost.textContent = isWashi(symbol)
    ? ""
    : symbol;

  ghost.style.left = x + "px";
  ghost.style.top = y + "px";
  ghost.style.display = "block";
}

function hideGhost() {
  ghost.style.display = "none";
  ghost.className = "";
  board.classList.remove("accepting-drop");
}

function insideBoard(clientX, clientY) {
  const rect = board.getBoundingClientRect();

  return (
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom
  );
}

function addSticker(symbol, clientX, clientY) {
  const rect = board.getBoundingClientRect();

  const x = (clientX - rect.left) / rect.width * 100;
  const y = (clientY - rect.top) / rect.height * 100;

  stickers.push({
    id:
      "sticker-" +
      Date.now() + "-" +
      Math.random().toString(36).slice(2),
    symbol,
    x: clamp(x, 5, 95),
    y: clamp(y, 5, 95)
  });

  save("stickers", stickers);
  renderStickers();
}

function updateStickerSelection() {
  document.querySelectorAll(".sticker-source").forEach(button => {
    button.classList.toggle(
      "selected",
      selectedSticker === button.dataset.sticker
    );
  });
}

/*
  Pointer capture allows sticker dragging to continue
  after the pointer leaves the sticker bank.
*/
document.querySelectorAll(".sticker-source").forEach(button => {

  button.addEventListener("pointerdown", event => {
    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    // Start fresh to avoid a previous tap selection.
    selectedSticker = null;
    updateStickerSelection();

    bankDrag = {
      pointerId: event.pointerId,
      symbol: button.dataset.sticker,
      startX: event.clientX,
      startY: event.clientY,
      moved: false
    };

    showGhost(
      bankDrag.symbol,
      event.clientX,
      event.clientY
    );

    try {
      button.setPointerCapture(event.pointerId);
    } catch {}

    event.preventDefault();
  });

  button.addEventListener("pointermove", event => {
    if (
      !bankDrag ||
      event.pointerId !== bankDrag.pointerId
    ) {
      return;
    }

    const distance = Math.hypot(
      event.clientX - bankDrag.startX,
      event.clientY - bankDrag.startY
    );

    if (distance > 8) {
      bankDrag.moved = true;
    }

    showGhost(
      bankDrag.symbol,
      event.clientX,
      event.clientY
    );

    board.classList.toggle(
      "accepting-drop",
      insideBoard(event.clientX, event.clientY)
    );
  });

  function finishBankDrag(event) {
    if (
      !bankDrag ||
      event.pointerId !== bankDrag.pointerId
    ) {
      return;
    }

    const wasDropped =
      event.type === "pointerup" &&
      bankDrag.moved &&
      insideBoard(event.clientX, event.clientY);

    if (wasDropped) {
      addSticker(
        bankDrag.symbol,
        event.clientX,
        event.clientY
      );

      selectedSticker = null;

    } else if (
      event.type === "pointerup" &&
      !bankDrag.moved
    ) {
      // Alternative for people who prefer tapping.
      selectedSticker = bankDrag.symbol;
    }

    hideGhost();

    try {
      if (button.hasPointerCapture(event.pointerId)) {
        button.releasePointerCapture(event.pointerId);
      }
    } catch {}

    bankDrag = null;
    updateStickerSelection();
  }

  button.addEventListener("pointerup", finishBankDrag);
  button.addEventListener("pointercancel", finishBankDrag);
});

/*
  Tap-to-place alternative.
  The pointer drag itself is handled by the sticker bank,
  so dragging does not create an extra board click.
*/
board.addEventListener("click", event => {
  if (!selectedSticker || trashMode || bankDrag) {
    return;
  }

  if (event.target.closest(
    ".board-item, a, button, textarea, input"
  )) {
    return;
  }

  addSticker(
    selectedSticker,
    event.clientX,
    event.clientY
  );

  selectedSticker = null;
  updateStickerSelection();
});

function renderStickers() {
  stickerLayer.replaceChildren();

  stickers.forEach(sticker => {
    const element = document.createElement("div");

    element.className = "board-item placed-sticker";
    element.dataset.id = sticker.id;
    element.dataset.stickerId = sticker.id;

    element.appendChild(
      createStickerGraphic(sticker.symbol)
    );

    stickerLayer.appendChild(element);

    const bounded = boundPosition(
      element,
      sticker.x,
      sticker.y
    );

    setPosition(element, bounded.x, bounded.y);
  });
}

document.getElementById("sticker-toggle")
  .addEventListener("click", () => {
    stickerPanel.classList.toggle("hidden");
  });

document.getElementById("close-stickers")
  .addEventListener("click", () => {
    stickerPanel.classList.add("hidden");
    selectedSticker = null;
    updateStickerSelection();
  });

document.getElementById("clear-stickers")
  .addEventListener("click", () => {
    if (!confirm("Remove all placed stickers?")) {
      return;
    }

    stickers = [];
    selectedSticker = null;

    save("stickers", stickers);
    renderStickers();
    updateStickerSelection();
  });

/* ===========================================
   EDITABLE QUOTE
=========================================== */

const quoteInput = document.getElementById("quote-text");

quoteInput.value = load("quote", DEFAULT_QUOTE);

quoteInput.addEventListener("input", () => {
  save("quote", quoteInput.value);
});

/* ===========================================
   TO-DO LIST
=========================================== */


/* ===========================================
   TO-DO LIST
=========================================== */

function renderTodos() {
  const container = document.getElementById("todo-items");

  container.replaceChildren();

  todos.forEach((todo, index) => {
    const row = document.createElement("div");
    row.className = "todo-row" + (todo.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(todo.done);
    checkbox.setAttribute(
      "aria-label",
      "Complete task: " + todo.text
    );

    checkbox.addEventListener("change", () => {
      todos[index].done = checkbox.checked;
      save("todos", todos);
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;

    text.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      save("todos", todos);
      renderTodos();
    });

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "todo-delete";
    deleteButton.textContent = "×";
    deleteButton.setAttribute(
      "aria-label",
      "Remove task: " + todo.text
    );

    // Remove the selected task and save the changes
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      save("todos", todos);
      renderTodos();
    });

    row.append(checkbox, text, deleteButton);
    container.appendChild(row);
  });
}

// Add new to-do tasks
document.getElementById("add-todo")
  .addEventListener("click", () => {
    const text = prompt("Add a task to your to-do list:");

    if (!text || !text.trim()) {
      return;
    }

    todos.push({
      text: text.trim().slice(0, 120),
      done: false
    });

    save("todos", todos);
    renderTodos();
  });

document.getElementById("add-todo")
  .addEventListener("click", () => {
    const text = prompt("Add a task to your to-do list:");

    if (!text || !text.trim()) {
      return;
    }

    todos.push({
      text: text.trim().slice(0, 120),
      done: false
    });

    save("todos", todos);
    renderTodos();
  });

/* ===========================================
   CUSTOM POST-IT NOTES
=========================================== */

function renderCustomNotes() {
  noteLayer.replaceChildren();

  customNotes.forEach(note => {
    const element = document.createElement("div");

    element.className = "board-item user-note";
    element.dataset.id = note.id;
    element.dataset.noteId = note.id;

    const pin = document.createElement("span");
    pin.className = "pushpin";
    pin.textContent = "●";

    const textarea = document.createElement("textarea");
    textarea.value = note.text;
    textarea.maxLength = 500;

    textarea.setAttribute(
      "aria-label",
      "Editable Post-it note"
    );

    textarea.addEventListener("input", () => {
      note.text = textarea.value;
      save("notes", customNotes);
    });

    element.append(pin, textarea);
    noteLayer.appendChild(element);

    const bounded = boundPosition(
      element,
      note.x,
      note.y
    );

    setPosition(
      element,
      bounded.x,
      bounded.y
    );
  });
}

document.getElementById("new-note")
  .addEventListener("click", () => {
    const text = prompt("Write your new Post-it note:");

    if (!text || !text.trim()) {
      return;
    }

    customNotes.push({
      id:
        "note-" +
        Date.now() + "-" +
        Math.random().toString(36).slice(2),
      text: text.trim().slice(0, 500),
      x: 50,
      y: 50
    });

    save("notes", customNotes);
    renderCustomNotes();
  });

/* ===========================================
   FAIRY LIGHTS AND DARK MODE
=========================================== */

function applyLights() {
  document.body.classList.toggle("dark", lightsOn);

  document.getElementById("light-icon").textContent =
    lightsOn ? "☀" : "☾";

  document.getElementById("light-label").textContent =
    lightsOn ? "Lights Off" : "Lights On";

  lightsButton.setAttribute(
    "aria-pressed",
    String(lightsOn)
  );
}

lightsButton.addEventListener("click", () => {
  lightsOn = !lightsOn;

  save("lights", lightsOn);
  applyLights();
});

/* ===========================================
   SIMPLE AND INTERACTIVE VIEW
=========================================== */


function applyViewMode() {
  workspace.hidden = simpleMode;
  simpleHome.hidden = !simpleMode;

  homeLayout.classList.toggle(
    "simple-active",
    simpleMode
  );

  document.getElementById("mode-label").textContent =
    simpleMode ? "Interactive View" : "Simple View";

  modeButton.setAttribute(
    "aria-pressed",
    String(simpleMode)
  );

  // Accessibility for mobile, where only the icon is shown
  modeButton.setAttribute(
    "aria-label",
    simpleMode
      ? "Switch to Interactive View"
      : "Switch to Simple View"
  );
}


modeButton.addEventListener("click", () => {
  simpleMode = !simpleMode;

  save("simple-mode", simpleMode);
  applyViewMode();

  if (!simpleMode) {
    // Recalculate positions when returning to the board.
    requestAnimationFrame(placeStaticItems);
  }
});

/* ===========================================
   RESET BOARD
=========================================== */

document.getElementById("reset-board")
  .addEventListener("click", () => {
    const confirmed = confirm(
      "Reset project positions, stickers, and custom notes? " +
      "Your edited quote and to-do list will be kept."
    );

    if (!confirmed) return;

    positions = {};
    stickers = [];
    customNotes = [];
    selectedSticker = null;

    save("positions", positions);
    save("stickers", stickers);
    save("notes", customNotes);

    setTrashMode(false);

    renderBoardProjects();
    placeStaticItems();
    renderStickers();
    renderCustomNotes();
    updateStickerSelection();
  });

/* ===========================================
   PROJECT GALLERY
=========================================== */

function createGridCard(project) {
  const link = document.createElement("a");

  link.className = "grid-card";
  link.href = "#project/" + project.id;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");

  description.textContent =
    project.date + " · " + project.label + " ↗";

  link.append(
    createProjectArtwork(project, "grid-art"),
    title,
    description
  );

  return link;
}

function renderProjectGrid(filter = "all") {
  const grid = document.getElementById("project-grid");

  grid.replaceChildren();

  PROJECTS
    .filter(project =>
      filter === "all" ||
      project.categories.includes(filter)
    )
    .forEach(project => {
      grid.appendChild(createGridCard(project));
    });
}

function renderSimpleGrid() {
  const grid = document.getElementById("simple-grid");

  grid.replaceChildren();

  PROJECTS.forEach(project => {
    grid.appendChild(createGridCard(project));
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProjectGrid(button.dataset.filter);
  });
});

/* ===========================================
   RENDER MULTIPLE PROPER PARAGRAPHS
=========================================== */

/*
  Converts blank-line-separated text into separate
  paragraphs. This prevents awkward line breaks and
  allows the writing to use the full page width.
*/
function renderParagraphs(elementId, content) {
  const container = document.getElementById(elementId);
  container.replaceChildren();

  const paragraphs = content
    .trim()
    .split(/\n\s*\n/);

  paragraphs.forEach(paragraphText => {
    const paragraph = document.createElement("p");

    paragraph.textContent =
      paragraphText.replace(/\s*\n\s*/g, " ").trim();

    container.appendChild(paragraph);
  });
}

/* ===========================================
   PROJECT PHOTO / VIDEO GALLERY
=========================================== */

function renderProjectMedia(project) {
  const gallery = document.getElementById("project-media");

  gallery.replaceChildren();

  project.media.forEach((media, index) => {
    const figure = document.createElement("figure");
    figure.className = "media-item";

    if (media.type === "image") {
      figure.appendChild(
        createImage(media.src, media.caption)
      );
    }

    if (media.type === "video") {
      const video = document.createElement("video");

      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.src = media.src;

      video.setAttribute(
        "aria-label",
        media.caption
      );

      figure.appendChild(video);
    }

    const caption = document.createElement("figcaption");

    const number = String(index + 1).padStart(2, "0");

    caption.textContent =
      number + " / " + media.caption;

    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

/* ===========================================
   INDIVIDUAL PROJECT PAGES
=========================================== */

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);

  if (!project) {
    location.hash = "#projects";
    return;
  }

  const simpleFields = {
    "detail-category":
      project.date + " · " + project.label,
    "detail-title": project.title,
    "detail-summary": project.summary,
    "detail-role": project.role,
    "detail-tools": project.tools
  };

  Object.entries(simpleFields).forEach(([elementId, value]) => {
    document.getElementById(elementId).textContent = value;
  });

  const collaboratorRow =
    document.getElementById("collaborator-row");

  collaboratorRow.hidden = !project.collaborator;

  document.getElementById("detail-collaborator")
    .textContent = project.collaborator || "";

  // Properly formatted, full-width paragraphs.
  renderParagraphs("detail-overview", project.overview);
  renderParagraphs("detail-process", project.process);
  renderParagraphs("detail-outcome", project.outcome);

  // Consistent hero background comes from CSS only.
  const hero = document.getElementById("detail-image");
  hero.replaceChildren();

  if (project.image) {
    hero.appendChild(
      createImage(project.image, project.title)
    );
  } else {
    const symbol = document.createElement("span");
    symbol.textContent = project.symbol;
    hero.appendChild(symbol);
  }

  renderProjectMedia(project);

  const index = PROJECTS.findIndex(item => item.id === id);

  const nextProject =
    PROJECTS[(index + 1) % PROJECTS.length];

  const nextLink =
    document.getElementById("next-project-link");

  nextLink.href = "#project/" + nextProject.id;
  nextLink.textContent =
    "Next: " + nextProject.title + " ↗";

  showPage("project-detail");
}

/* ===========================================
   CONTACT COPY BUTTONS
=========================================== */

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const temp = document.createElement("textarea");

  temp.value = text;
  temp.readOnly = true;
  temp.style.position = "fixed";
  temp.style.opacity = "0";

  document.body.appendChild(temp);
  temp.select();

  const successful = document.execCommand("copy");

  temp.remove();

  if (!successful) {
    throw new Error("Copy failed");
  }
}

document.querySelectorAll(".copy-button").forEach(button => {
  button.addEventListener("click", async () => {
    const originalHTML = button.innerHTML;
    const originalLabel =
      button.getAttribute("aria-label");

    try {
      await copyToClipboard(button.dataset.copy);

      button.textContent = "✓";
      button.classList.add("copied");
      button.setAttribute("aria-label", "Copied");

      document.getElementById("copy-status").textContent =
        "Copied to clipboard!";

      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove("copied");

        button.setAttribute(
          "aria-label",
          originalLabel
        );
      }, 1600);

    } catch {
      document.getElementById("copy-status").textContent =
        "Copy unavailable. Please select and copy the text.";
    }
  });
});

/* ===========================================
   MOBILE HAMBURGER MENU
=========================================== */

const menuButton = document.getElementById("menu-toggle");

const primaryNav = document.getElementById("primary-nav");

function setMenuOpen(open) {
  menuButton.classList.toggle("open", open);
  primaryNav.classList.toggle("open", open);

  menuButton.setAttribute(
    "aria-expanded",
    String(open)
  );

  menuButton.setAttribute(
    "aria-label",
    open
      ? "Close navigation menu"
      : "Open navigation menu"
  );
}

menuButton.addEventListener("click", () => {
  setMenuOpen(
    !primaryNav.classList.contains("open")
  );
});

primaryNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    setTrashMode(false);

    selectedSticker = null;
    updateStickerSelection();
  }
});

/* ===========================================
   PAGE NAVIGATION
=========================================== */

function showPage(id) {
  // Show the requested page
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle(
      "active",
      page.id === id
    );
  });

  // Only show the view toggle on the Home page
  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle(
    "on-home",
    id === "home"
  );

  window.scrollTo(0, 0);
}

function route() {
  const hash = decodeURIComponent(
    location.hash.slice(1) || "home"
  );

  if (hash.startsWith("project/")) {
    openProject(hash.substring("project/".length));
    return;
  }

  const validPages = [
    "home",
    "projects",
    "about",
    "contact"
  ];

  showPage(
    validPages.includes(hash) ? hash : "home"
  );
}

window.addEventListener("hashchange", route);

/* ===========================================
   RESPONSIVE BOARD POSITIONS
=========================================== */

let previousLayout = layoutKey();

window.addEventListener("resize", () => {
  const currentLayout = layoutKey();

  if (currentLayout !== previousLayout) {
    previousLayout = currentLayout;

    if (!simpleMode) {
      placeStaticItems();
    }

    renderStickers();
    renderCustomNotes();
  }

  if (window.innerWidth > 767) {
    setMenuOpen(false);
  }
});

/* ===========================================
   FOOTER YEAR
=========================================== */

document.getElementById("footer-year").textContent =
  new Date().getFullYear();

/* ===========================================
   INITIALIZE PORTFOLIO
=========================================== */

renderBoardProjects();
placeStaticItems();

renderStickers();
renderCustomNotes();
renderTodos();

renderProjectGrid();
renderSimpleGrid();

applyLights();
applyViewMode();
route();

/*
  Reposition once fonts load, since handwritten text
  can slightly change each Polaroid's dimensions.
*/
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    if (!simpleMode) placeStaticItems();
  });
}


/* =========================================
   BACK TO TOP
========================================= */

const backToTopButton = document.getElementById("back-to-top");

function updateBackToTop() {
  const activePage = document.querySelector(".page.active");
  const pageId = activePage?.id;

  // Only show on Projects and individual project pages
  const isProjectPage =
    pageId === "projects" || pageId === "project-detail";

  backToTopButton.classList.toggle(
    "visible",
    isProjectPage && window.scrollY > 350
  );
}

window.addEventListener("scroll", updateBackToTop, {
  passive: true
});

window.addEventListener("hashchange", updateBackToTop);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

updateBackToTop();