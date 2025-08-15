<script>
  // Component Imports
  import ButtonList from "./components/ButtonList.svelte";

  // Other Imports

  let name = "Hong Chen";
  let tagline = "Aspiring architect and designer. Website under development";

  // Main Button List
  let linkButtons = [
    { text: "About Me", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
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

  // Images For Home Page
  import profileImage from "./assets/profile.jpg";
</script>

<main>
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
  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    text-align: center;
    margin-top: 0rem;
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
