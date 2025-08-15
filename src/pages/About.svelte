<script>
  import ButtonList from "../components/ButtonList.svelte";

  let linkButtons = [
    { text: "Home", href: "#/" },
    { text: "Portfolio", href: "#/portfolio" },
  ];
</script>

<main class="about-page">
  <h1>About Me</h1>
  <p>This is a placeholder about page. Add your content here.</p>

  <ButtonList buttons={linkButtons} />
</main>

<style>
  /* Make the entire page have the background */
  .about-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
  }

  main {
    text-align: center;
    margin-top: 2rem;
  }
</style>
