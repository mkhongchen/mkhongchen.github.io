<script>
  import ButtonList from "../components/ButtonList.svelte";

  let linkButtons = [
    { text: "Home", href: "#/" },
    { text: "Portfolio", href: "#/portfolio" },
  ];
</script>

<div class="background"></div>
<main>
  <h1>About Me</h1>
  <p>This is a placeholder about page. Add your content here.</p>

  <ButtonList buttons={linkButtons} />
</main>

<style>
  /* Make the entire page have the background */
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: -1; /* Ensure background stays behind content */
  }

  main {
    text-align: center;
    margin-top: 2rem;
  }
</style>
