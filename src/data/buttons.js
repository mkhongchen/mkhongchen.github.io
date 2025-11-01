// Main navigation buttons
export const mainButtons = [
  { text: "About", 
    href: "#/about", 
    submenu: [
        { text: "About Me", href: "#/about", scrollTo: "#about-me" },
        { text: "About the Website", href: "#/about", scrollTo: "#about-site" },
      ],
  },
  { text: "Architecture", href: "#/portfolio",
    submenu: [
        { text: "All Projects", href: "#/portfolio" },
        { text: "Select Works (PDF)", href: "https://files.mkhongchen.ca/Portfolio.pdf", external: true },
    ],
   },
   { text: "Photography", href: "#/photography" },
   { text: "Contact", href: "https://mkhongchen.ca/contact", external: true },
];

// Main social media buttons
export const socialButtons = [
    {
      icon: "cib:linkedin",
      href: "https://www.linkedin.com/in/mkhongchen/",
      external: true,
    },
    {
      icon: "simple-icons:github",
      href: "https://github.com/mkhongchen/mkhongchen.github.io/",
      external: true,
    },
    {
      icon: "simple-icons:instagram",
      href: "https://www.instagram.com/mk.hongchen/",
      external: true,
    },
];

//Resume and Portfolio icon buttons
export const fileButtons = [
  {
    icon: "ph:file-light",
    href: "https://files.mkhongchen.ca/Resume.pdf",
    external: true,
  },
  {
    icon: "bytesize:book",
    href: "https://files.mkhongchen.ca/Portfolio.pdf",
    external: true,
  }
]

//Main home button
export const home = 
  {
    text: "Hong Chen",
    href: "#/",
  };