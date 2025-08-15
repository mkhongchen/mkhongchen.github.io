<script>
  // Component Imports
  import ButtonList from "../components/ButtonList.svelte";

  // Other Imports
  import profileImage from "../assets/profile.jpg";
  import backgroundImage from "../assets/background.jpg";

  let name = "Hong Chen";
  let tagline = "Aspiring architect and designer. Website under development";

  // Main Button List
  let linkButtons = [
    { text: "About Me", href: "#/about" },
    { text: "Portfolio", href: "#/portfolio" },
    { text: "Contact", href: "https://mkhongchen.ca/contact", external: true },
  ];

  let socialButions = [
    {
      icon: "simple-icons:instagram",
      href: "https://www.instagram.com/mk.hongchen/",
      external: true,
    },
    {
      icon: "cib:linkedin",
      href: "https://www.linkedin.com/in/mkhongchen/",
      external: true,
    },
  ];
</script>

<main class="home-page">
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src={profileImage} alt="Profile photo" />

  <h1>
    {name}
  </h1>

  <p>{tagline}</p>

  <ButtonList buttons={linkButtons} />
  <ButtonList buttons={socialButions} flexDirection="row" round={true} />
</main>

<style>
  /* Make the entire page have the background */
  .home-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    /* z-index: -1; /* Ensure background stays behind content */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  img {
    width: clamp(3rem, 40vw, 10rem);
    border-radius: 50%;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 4rem);
  }

  p {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
</style>
