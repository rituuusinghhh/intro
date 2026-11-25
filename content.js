/* =====================================================================
   RITURAJ SINGH — WEBSITE CONTENT FILE   (content.js)
   =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR WEBSITE.

   QUICK RULES (very important — they keep the website from breaking):
   1. Only change the text that is INSIDE "double quotes".
   2. Never delete a quote mark ("), a comma (,), a bracket [ ]  or a brace { }.
   3. Every item in a list is separated by a comma — including the
      last-but-one item. (A comma after the very last item is also fine.)
   4. If you need a quote mark inside your text, write it like this:  \"
   5. Anything shown as  [EDIT: ...]  is a placeholder. Replace the WHOLE
      thing, including the square brackets, with your real information.
      (Placeholders are highlighted on the live site so you can spot them.
       Turn the highlight off with  highlightPlaceholders: false  below.)
   6. To REMOVE an item (a project, skill, photo...) delete its whole
      { ... }, block including the comma after it.
   7. To ADD an item, copy a whole { ... }, block, paste it right after
      another one, then change the text.

   After editing, click "Commit changes" on GitHub. Your site updates in
   about 1 minute. Full instructions are in README.md.
   ===================================================================== */

window.SITE = {

  /* ------------------------------------------------------------------
     SETTINGS
     ------------------------------------------------------------------ */
  settings: {
    highlightPlaceholders: true,   // true = show [EDIT: ...] text with a dotted highlight. Set false when you are done.
    showSkillLevels: false,        // true = show a progress bar on each skill (uses "level" below, 0-100)
    defaultTheme: "dark",          // "dark" or "light" (visitors can switch with the sun/moon button)
    accentColor: "#d4af6a"         // main accent colour (gold). Try electric blue: "#4f8cff"
  },

  /* ------------------------------------------------------------------
     SEARCH ENGINE / SHARING INFORMATION (SEO)
     ------------------------------------------------------------------ */
  seo: {
    title: "Rituraj Singh — Content Creator, Creative Designer, Educator & Entrepreneur",
    description: "Official portfolio of Rituraj Singh — content creator, creative designer, educator and entrepreneur. Explore creative projects, graphic design, branding, digital content and education."
  },

  /* ------------------------------------------------------------------
     HERO (top of the page)  +  BRAND
     ------------------------------------------------------------------ */
  brand: {
    name: "Rituraj Singh",
    logoText: "RS",                                  // 2 letters shown in the top-left logo
    badge: "[EDIT: short status line, e.g. Open for creative collaborations]",
    roles: ["Content Creator", "Creative Designer", "Educator", "Entrepreneur"],   // animated typing text
    tagline: "Where creativity, education and enterprise meet.",   // <- your personal tagline
    intro: "I'm Rituraj Singh — I work on creative projects, graphic design, digital content creation, business branding and education, and I'm associated with VIJAY SHREE POP & PVC and A.S. Computer & Coaching Classes.",
    buttons: {
      journey: "Explore My Journey",
      work: "View My Work",
      contact: "Contact Me"
    },
    // PROFILE PHOTO: upload a photo named  profile.jpg  into assets/images/  and it appears automatically.
    // (Using a different file name or type, e.g. .png / .webp? Change the name here.)
    photo: "assets/images/profile.jpg",
    // Small floating cards next to your photo (max 3). Icons: pen-tool, video, book-open, briefcase, camera, layers, star, award, zap, users
    heroChips: [
      { icon: "layers",    label: "Creative Design",   sub: "Graphics & branding" },
      { icon: "video",     label: "Digital Content",   sub: "Stories that connect" },
      { icon: "book-open", label: "Education",         sub: "Learning & teaching" }
    ],
    // Scrolling keyword strip under the hero
    marquee: ["Graphic Design", "Content Creation", "Business Branding", "Digital Marketing", "Teaching & Training", "Entrepreneurship"]
  },

  /* ------------------------------------------------------------------
     SECTION HEADINGS (small label, big title, short intro under it)
     ------------------------------------------------------------------ */
  sections: {
    about:        { eyebrow: "About Me",                   title: "Creativity, education and enterprise — one story.", intro: "" },
    journey:      { eyebrow: "My Journey",                 title: "The path so far",                                   intro: "Education, experience, milestones and achievements — in one interactive timeline." },
    skills:       { eyebrow: "My Skills",                  title: "What I bring to every project",                     intro: "" },
    projects:     { eyebrow: "My Projects",                title: "Selected work",                                     intro: "A look at the creative, business and educational projects I've worked on." },
    gallery:      { eyebrow: "Photo Gallery",              title: "Moments & frames",                                  intro: "Tap any photo to view it full-size." },
    achievements: { eyebrow: "Experience & Achievements",  title: "Milestones that matter",                            intro: "" },
    interests:    { eyebrow: "My Interests",               title: "What drives me",                                    intro: "" },
    contact:      { eyebrow: "Contact",                    title: "Let's create something together",                   intro: "" }
  },

  /* ------------------------------------------------------------------
     ABOUT ME
     ------------------------------------------------------------------ */
  about: {
    photo: "",   // leave empty to reuse your profile photo, or give another one, e.g. "assets/images/about.jpg"
    photoCaption: "Rituraj Singh",
    lead: "I'm Rituraj Singh — a content creator, creative designer, educator and entrepreneur.",
    paragraphs: [
      "My work spans creative projects, graphic designing, digital content creation, business branding and education. I'm associated with VIJAY SHREE POP & PVC and A.S. Computer & Coaching Classes.",
      "[EDIT: Write 2–3 sentences about your story — where you come from, what inspired you to become a creator and an educator.]",
      "[EDIT: Write 1–2 sentences about how you like to work and what you want people to feel when they see your work.]"
    ],
    facts: [
      { label: "Based in",  value: "[EDIT: City, State]" },
      { label: "Languages", value: "[EDIT: e.g. Hindi, English]" },
      { label: "Focus",     value: "Design · Content · Education · Business" }
    ],
    traits: [
      { title: "Personality", text: "[EDIT: describe your personality in one or two lines]" },
      { title: "Mindset",     text: "[EDIT: describe how you think and approach work]" },
      { title: "Ambitions",   text: "[EDIT: describe what you want to achieve]" }
    ],
    venturesTitle: "Associated with",
    ventures: [
      { name: "VIJAY SHREE POP & PVC",          type: "Business",  text: "[EDIT: one line about this business and your role]", url: "" },
      { name: "A.S. Computer & Coaching Classes", type: "Education", text: "[EDIT: one line about this institute and your role]", url: "" }
    ]
  },

  /* ------------------------------------------------------------------
     MY JOURNEY — interactive timeline
     type must be one of:  education | experience | milestone | achievement
     "points" is optional: extra bullet points shown when the visitor taps "More".
     ------------------------------------------------------------------ */
  journey: {
    typeLabels: { education: "Education", experience: "Experience", milestone: "Milestone", achievement: "Achievement" },
    items: [
      {
        type: "education",
        period: "[EDIT: Year – Year]",
        title: "[EDIT: Degree / Course / Class]",
        org: "[EDIT: School / College / University]",
        text: "[EDIT: one or two lines about what you studied or learned.]"
      },
      {
        type: "education",
        period: "[EDIT: Year]",
        title: "[EDIT: Certification or training]",
        org: "[EDIT: Institute / Platform]",
        text: "[EDIT: what you learned or earned.]"
      },
      {
        type: "experience",
        period: "[EDIT: Year – Present]",
        title: "[EDIT: Your role]",
        org: "VIJAY SHREE POP & PVC",
        text: "[EDIT: what you do here and what you have built or improved.]",
        points: ["[EDIT: key responsibility or result]", "[EDIT: another responsibility or result]"]
      },
      {
        type: "experience",
        period: "[EDIT: Year – Present]",
        title: "[EDIT: Your role]",
        org: "A.S. Computer & Coaching Classes",
        text: "[EDIT: what you teach or manage here, and what you are proud of.]",
        points: ["[EDIT: subject or batch you handle]", "[EDIT: something your students achieved]"]
      },
      {
        type: "milestone",
        period: "[EDIT: Year]",
        title: "[EDIT: An important milestone]",
        org: "",
        text: "[EDIT: why it mattered.]"
      },
      {
        type: "achievement",
        period: "[EDIT: Year]",
        title: "[EDIT: An achievement or recognition]",
        org: "",
        text: "[EDIT: a short description. Only add real achievements.]"
      }
    ]
  },

  /* ------------------------------------------------------------------
     MY SKILLS
     icon options: layers, video, bar-chart, zap, book-open, briefcase, pen-tool, camera, cpu, users, send, star, award, target
     level: 0-100 (only shown if settings.showSkillLevels is true)
     ------------------------------------------------------------------ */
  skills: [
    { icon: "layers",    name: "Graphic Designing",    text: "Visual design for print and digital — posters, social media creatives, packaging and more. [EDIT: add the tools you use]", level: 80 },
    { icon: "video",     name: "Content Creation",     text: "Planning and creating digital content that tells a story and holds attention. [EDIT: add platforms or formats]",    level: 80 },
    { icon: "bar-chart", name: "Digital Marketing",    text: "Promoting brands and businesses online with clear, consistent messaging.",                                           level: 80 },
    { icon: "zap",       name: "Creative Thinking",    text: "Turning rough ideas into original concepts and practical solutions.",                                                level: 80 },
    { icon: "book-open", name: "Teaching & Training",  text: "Explaining ideas clearly and helping students learn with confidence.",                                               level: 80 },
    { icon: "briefcase", name: "Business Management",  text: "Running and growing a business — planning, people and customers.",                                                   level: 80 }
  ],

  /* ------------------------------------------------------------------
     MY PROJECTS
     category must match one of the names in "categories" (spelled exactly the same).
     image: put pictures in assets/images/projects/ and write the file name here.
     link:  leave "" if you do not want a "View project" button.
     ------------------------------------------------------------------ */
  projects: {
    categories: ["Graphic Design", "Branding & Logo Design", "Social Media Content", "Business Projects", "Educational Projects", "Creative Experiments"],
    items: [
      { category: "Graphic Design",         title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-1.svg", link: "" },
      { category: "Branding & Logo Design", title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-2.svg", link: "" },
      { category: "Social Media Content",   title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-3.svg", link: "" },
      { category: "Business Projects",      title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-4.svg", link: "" },
      { category: "Educational Projects",   title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-5.svg", link: "" },
      { category: "Creative Experiments",   title: "[EDIT: Project name]", text: "[EDIT: one or two lines about this project and what you did.]", image: "assets/images/projects/project-6.svg", link: "" }
    ]
  },

  /* ------------------------------------------------------------------
     PHOTO GALLERY
     Upload photos into assets/images/gallery/ , then add a line here.
     Tip: keep each photo under ~300 KB (see README → "Prepare your photos").
     ------------------------------------------------------------------ */
  gallery: [
    { src: "assets/images/gallery/gallery-1.svg", caption: "[EDIT: caption]", category: "Portraits" },
    { src: "assets/images/gallery/gallery-2.svg", caption: "[EDIT: caption]", category: "Creative Work" },
    { src: "assets/images/gallery/gallery-3.svg", caption: "[EDIT: caption]", category: "Moments" },
    { src: "assets/images/gallery/gallery-4.svg", caption: "[EDIT: caption]", category: "Creative Work" },
    { src: "assets/images/gallery/gallery-5.svg", caption: "[EDIT: caption]", category: "Portraits" },
    { src: "assets/images/gallery/gallery-6.svg", caption: "[EDIT: caption]", category: "Moments" },
    { src: "assets/images/gallery/gallery-7.svg", caption: "[EDIT: caption]", category: "Creative Work" },
    { src: "assets/images/gallery/gallery-8.svg", caption: "[EDIT: caption]", category: "Moments" }
  ],

  /* ------------------------------------------------------------------
     EXPERIENCE & ACHIEVEMENTS
     Each group is a card. Add / remove groups and items freely.
     icon options: award, check, briefcase, star, book-open, target
     ------------------------------------------------------------------ */
  achievements: {
    stats: [
      // Optional big numbers. Example (remove the // to use):
      // { value: "100+", label: "Completed projects" }
    ],
    groups: [
      { icon: "award", title: "Professional Achievements", items: [
        { title: "[EDIT: Achievement]", text: "[EDIT: short detail]", year: "[EDIT: Year]" }
      ] },
      { icon: "check", title: "Certifications", items: [
        { title: "[EDIT: Certification name]", text: "[EDIT: issued by]", year: "[EDIT: Year]" }
      ] },
      { icon: "briefcase", title: "Completed Projects", items: [
        { title: "[EDIT: Project name]", text: "[EDIT: short detail]", year: "[EDIT: Year]" }
      ] },
      { icon: "star", title: "Personal Milestones", items: [
        { title: "[EDIT: Milestone]", text: "[EDIT: short detail]", year: "[EDIT: Year]" }
      ] }
    ]
  },

  /* ------------------------------------------------------------------
     MY INTERESTS, HOBBIES & FUTURE GOALS
     ------------------------------------------------------------------ */
  interests: {
    items: [
      { icon: "pen-tool",  title: "Creative Work",       text: "Turning ideas into visuals, stories and experiences." },
      { icon: "cpu",       title: "Technology",          text: "Exploring tools and technology that make creating easier." },
      { icon: "layers",    title: "Designing",           text: "Shaping layouts, brands and visuals with care for detail." },
      { icon: "camera",    title: "Photography",         text: "Capturing moments and framing the world creatively." },
      { icon: "book-open", title: "Learning & Teaching", text: "Learning something new every day and sharing it with others." }
    ],
    hobbiesTitle: "Hobbies",
    hobbies: ["[EDIT: Hobby 1]", "[EDIT: Hobby 2]", "[EDIT: Hobby 3]"],
    goalsTitle: "Future goals",
    goals: [
      { title: "[EDIT: Goal 1]", text: "[EDIT: what you want to achieve and why.]" },
      { title: "[EDIT: Goal 2]", text: "[EDIT: what you want to achieve and why.]" },
      { title: "[EDIT: Goal 3]", text: "[EDIT: what you want to achieve and why.]" }
    ]
  },

  /* ------------------------------------------------------------------
     CONTACT & SOCIAL LINKS
     WhatsApp number: digits only, with country code, NO + or spaces.
        India example:  919876543210   (91 = India, then your 10-digit number)
     icon options: instagram, linkedin, facebook, youtube, twitter, github, globe, phone, mail, whatsapp
     Links that still contain YOUR_ or example.com are shown but will not open
     (the visitor sees a friendly note) until you replace them.
     ------------------------------------------------------------------ */
  contact: {
    text: "Have an idea, a project or a collaboration in mind? Reach out — I'd love to hear from you.",
    whatsapp: {
      number: "91XXXXXXXXXX",
      message: "Hello Rituraj, I found your website and would like to connect."
    },
    email: "your-email@example.com",
    links: [
      { name: "Instagram", icon: "instagram", url: "https://instagram.com/YOUR_USERNAME",         handle: "@YOUR_USERNAME" },
      { name: "LinkedIn",  icon: "linkedin",  url: "https://linkedin.com/in/YOUR_USERNAME",       handle: "Rituraj Singh" },
      { name: "Facebook",  icon: "facebook",  url: "https://facebook.com/YOUR_USERNAME",          handle: "Rituraj Singh" },
      { name: "YouTube",   icon: "youtube",   url: "https://youtube.com/@YOUR_CHANNEL",           handle: "@YOUR_CHANNEL" }
      // Add more like this (don't forget the comma on the line above):
      // { name: "X (Twitter)", icon: "twitter", url: "https://x.com/YOUR_USERNAME", handle: "@YOUR_USERNAME" }
    ]
  },

  /* ------------------------------------------------------------------
     FOOTER  (the year updates automatically)
     ------------------------------------------------------------------ */
  footer: {
    tagline: "Where creativity, education and enterprise meet.",
    note: "All rights reserved."
  }
};
