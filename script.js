
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
      "Recreating an intricate fantasy bow from Genshin Impact in Autodesk Maya as my first exploration of polygon modeling.",

    role: "3D Modeling & Design",
    tools: "Autodesk Maya",

    overview: `For my 3D Modeling midterm, we were given the freedom to create any object of our choice using Autodesk Maya. I decided to recreate a bow from Genshin Impact, a game I've always enjoyed playing. One of the things I've admired most about the game is the amount of detail that goes into its designs, and I wanted to challenge myself to recreate some of that complexity in three dimensions.

This was my first experience with 3D modeling outside of traditional CAD software, so I was also curious to see how creative polygon modeling compared to the engineering-focused tools I was more familiar with.`,

    process: `I began by studying a reference image of the bow and breaking its intricate design into smaller, more manageable components. Its overlapping shapes, decorative details, and curved forms were especially challenging because I had only recently started learning Maya.

Unlike CAD modeling, where I was accustomed to working with precise dimensions and structured geometric relationships, Maya required me to approach form through polygon manipulation and visual refinement.

I experimented with different modeling tools, repeatedly adjusted the geometry, and gradually assembled the individual components into a complete model. The process pushed me to become more comfortable learning through experimentation and trial and error.`,

    outcome: `By the end of the project, I had created a digital model inspired by the original bow and documented the final result in a showcase video.

This project was particularly meaningful because it allowed me to combine a personal interest with a new technical skill. It helped me recognize how different modeling tools encourage different approaches to design.

While CAD taught me to think about precision and functionality, Maya introduced me to a more expressive way of creating complex forms. The experience gave me more confidence in learning unfamiliar software and approaching designs that initially seemed too complicated to tackle.`,

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

    role: "Rocket Painting, Visual Design & Airframe Fabrication",
    tools:
      "Composite Airframe Layup, Cricut, Precision Knife, Vinyl Stencils, Painting",

    overview: `As part of Rogue Aerospace, I took the initiative to help bring visual identity back into our rockets after noticing that the team hadn't painted a rocket in quite some time.

The project centered around Perseverance, the team's first full-scale hybrid-fueled rocket, standing over 15 feet tall. Alongside developing and applying its painted design, I also contributed to the manufacturing of the rocket's airframe.

This provided an opportunity to combine two aspects of engineering and art that I had always wanted to explore.`,

    process: `I developed the design around the rocket's name, Perseverance, using large, bold lettering as its centerpiece. The cherry blossoms were inspired by the trees that bloom around New York University Tandon School of Engineering during the spring. To me, they represented growth and new beginnings, fitting for the team's first full-scale hybrid rocket.

Near the fins, I incorporated a design inspired by the Brooklyn Bridge to represent our connection to Brooklyn.

I participated in the composite airframe layup process, which helped me understand how the rocket's physical construction influenced its finishing requirements. Because the rocket stood over 15 feet tall, painting required careful planning. I had to consider how to apply multiple layers while creating a durable finish appropriate for the rocket's intended launch conditions.

I prepared vinyl stencils using a precision knife and a Cricut machine. Cutting detailed designs by hand took considerable time, while wrapping and aligning larger stencils around the curved airframe required patience and careful adjustments.`,

    outcome: `Seeing the finished painted components and assembled rocket was especially rewarding because I had contributed to both the manufacturing process and its visual identity.

The experience reinforced something that has become increasingly important to me: engineering and creativity do not have to exist separately. Even the artistic part of the project required technical problem-solving, planning, precision, and an understanding of materials.

It strengthened my interest in projects that combine engineering knowledge with artistic expression.`,

    media: [
      {
        type: "image",
        src:
          "img/perseverance-rocket-painting/perseverance-design-sketch.png",
        caption:
          "Initial rocket painting design with Perseverance lettering, cherry blossoms, and Brooklyn-inspired graphics."
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

    role: "Independent Design, Simulation & Fabrication",
    tools: "SolidWorks, OpenRocket, 3D Printing",

    overview: `When I first joined Rogue Aerospace, I had very little experience with rockets or the engineering principles behind them. Although I was excited to contribute to the team, I wanted to better understand how the different components of a rocket work together.

To challenge myself, I decided to design and launch my own small-scale model rocket. My goal was to go through the entire process, from CAD modeling and simulation to fabrication, launch, and recovery.`,

    process: `I began by creating a model of the rocket in SolidWorks, considering how the different components would fit together inside a relatively small body.

I then used OpenRocket to run multiple simulations and evaluate the expected flight behavior before moving forward with fabrication.

One of my biggest concerns was the recovery system. Because the rocket was relatively small, I had to think carefully about how to fit the parachute inside while making sure it could deploy properly during flight. This encouraged me to consider not only how the rocket would look and fit together, but also how its components would function throughout the launch and recovery sequence.

After refining the design, I fabricated the rocket using 3D printing and prepared it for launch.`,

    outcome: `My rocket successfully launched to an altitude of over 1,000 feet and was recovered afterward.

I was particularly proud to be the only member of my group to achieve a successful baby rocket launch during that activity, especially because this was my first time going through the process.

More importantly, the project gave me a much stronger understanding of the systems involved in rocketry. Instead of learning about individual components only in theory, I could see how modeling, simulation, fabrication, and physical performance connected to one another.

It made me more confident in approaching unfamiliar engineering challenges and reminded me how much I enjoy learning through hands-on experimentation.`,

    media: [
      {
        type: "image",
        src: "img/baby-rocket/baby-rocket-solidworks.png",
        caption:
          "SolidWorks CAD model of my independently designed rocket."
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
      "Designing a modular two-part mounting system for a supercapacitor on ARC Robotics' Hero Robot, prioritizing protection, accessibility, and wire management.",

    role: "Electronics Mounting & Mechanical Design",
    tools: "CAD Modeling (Onshape), 3D Printing, Threaded Inserts",

    overview: `During the 2025-2026 competition season, I contributed to the design of mounting components for various electronics on ARC Robotics' Hero Robot chassis.

One of the most challenging components I worked on was the supercapacitor. Because of its size and the amount of wiring connected to it, designing an effective mount required more than simply finding a way to secure it to the robot.

I wanted to create a solution that would protect the electronics while also making them easier to install, remove, and maintain.`,

    process: `The biggest challenge was balancing protection, accessibility, and wire management within the limited space of the chassis.

Rather than designing a single-piece mount that would require the entire assembly to be unscrewed whenever the electronics needed attention, I developed a modular two-part system. The outer mount could remain secured to the robot, while the inner component holder could slide in and out without requiring the outer structure to be removed.

This approach made it easier to access the supercapacitor and organize the wiring while preserving a protective enclosure.

I incorporated threaded inserts to create secure, reusable fastening points. I also designed thicker outer walls to help protect the electronics against impacts and potential flying projectiles during competition.

Throughout the process, I created prototype prints, adjusted the mounting components, and considered how the assembly would integrate into the surrounding chassis.`,

    outcome: `The final design consisted of a modular two-part mounting system that allowed the electronics to be held in a removable inner component within a protective outer mount.

This project taught me to think beyond whether a component simply fits or functions. I had to consider how teammates would interact with the design, how easily the electronics could be serviced, and how the assembly would hold up in a competition environment.

It reinforced the importance of designing for the people who will assemble, maintain, and use a product. That balance between functionality, manufacturability, and usability is one of the aspects of industrial and product design that interests me most.`,

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

    role: "Collaborative Concept, Design & Fabrication",
    collaborator: "Celine Ho",
    tools:
      "Adobe Illustrator, Laser Cutting, Acrylic, Organza, Sewing, Aluminum Wire, Vinyl",

    overview: `Taking Up Space is a mixed-media installation I created with Celine Ho for our fabrication course. The piece explores the journey of finding individuality in a world that often pressures us to conform.

The rigid acrylic box represents societal expectations and the pressure to fit into a predetermined mold. Fabric rises from the floor and enters the box, symbolizing the uncertain path of self-discovery.

As it moves through the structure, the fabric adjusts to its boundaries before eventually extending outward, representing the courage to express individuality on our own terms.

We wanted to use the contrast between soft, flowing materials and precise geometric structures to communicate the tension between conformity and self-expression.`,

    process: `One of our biggest goals was to combine different fabrication techniques into a cohesive installation.

We began by creating the acrylic cube using Adobe Illustrator and laser cutting the individual pieces before assembling them with acrylic cement. We then applied holographic vinyl to selected surfaces, working through challenges including adhesive marks, air bubbles, folds, and alignment.

The fabric components were another important part of the process. This was my first time using a sewing machine, so I had to learn how to work with different materials while considering their structural requirements.

For the organza pieces, we created wide stitched channels that allowed aluminum wire to pass through the fabric. This gave the soft material enough structure to hold curved, organic forms. The black fabric required adjustments to the sewing machine's tension because of its stretchier properties.

During installation, we used fishing wire to suspend the acrylic cube and the individual fabric components. Balancing the structure was particularly challenging because the heavier fabric could cause the cube to tilt. We adjusted the suspension points and wire-supported fabric to achieve our intended composition.`,

    outcome: `The completed installation brought together rigid acrylic geometry, flowing fabric, and vibrant color to communicate a journey from conformity toward individuality.

This project was particularly meaningful because it challenged me to learn unfamiliar fabrication techniques while also considering how materials can communicate an idea.

Sewing became much more technical than I initially expected. I had to consider stitch width, fabric tension, weight distribution, structural support, and shaping.

At the same time, every technical decision contributed to the visual and conceptual message of the piece. Working on a large installation also taught me about planning, collaboration, and adapting when materials behave differently than expected.

It reinforced that fabrication is not simply about creating an object. It can also be a way to tell stories and create meaningful experiences.`,

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
          "Acrylic cube after applying holographic vinyl."
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
          "Final composition combining acrylic, fabric, wire, and color."
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