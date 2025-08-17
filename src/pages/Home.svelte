<script>
  // Component Imports
  import ButtonList from "../components/ButtonList.svelte";

  // Other Imports
  import profileImage from "../assets/profile.jpg";
  import backgroundImage from "../assets/background.jpg";

  let name = "Hong Chen";
  let tagline = "Aspiring architect and designer.\n Website under development.";

  // Main Button List
  let linkButtons = [
    { text: "About Me", href: "#/about" },
    { text: "Portfolio", href: "#/portfolio" },
    { text: "Contact", href: "https://mkhongchen.ca/contact", external: true },
  ];

  let socialButions = [
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
</script>

<div class="background" style="background-image: url({backgroundImage});"></div>
<main>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src={profileImage} alt="Profile photo" />

  <h1>{name}</h1>
  <p>{tagline}</p>

  <ButtonList buttons={linkButtons} />
  <ButtonList buttons={socialButions} flexDirection="row" gap="1rem" />
</main>

<style>
  /* Make the entire page have the background */
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    z-index: -1; /* Ensure background stays behind content */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
  }

  img {
    width: 150px;
    border-radius: 50%;
  }

  h1 {
    font-size: 40pt;
    margin: 0;
  }

  p {
    font-size: 14pt;
    white-space: pre-line;
    line-height: 1.75;
    margin: 0;
  }
</style>
