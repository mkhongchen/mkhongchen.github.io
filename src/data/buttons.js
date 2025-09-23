// Main navigation buttons
export const mainButtons = [
  { text: "About", 
    href: "#/about", 
    submenu: [
        { text: "About Me", href: "#/about", scrollTo: "#about-me" },
        { text: "About the Website", href: "#/about", scrollTo: "#about-site" },
      ],
  },
  { text: "Portfolio", href: "#/portfolio",
    submenu: [
        { text: "Project A", href: "#/portfolio-a" },
        { text: "Project B", href: "#/portfolio-b" },
    ],
   },
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

//Main home button
export const home = 
  {
    text: "Hong Chen",
    fontSize: "24pt",
    href: "#/",
    backgroundColor: "rgba(0,0,0,0.0)",
    width: "auto",
  };