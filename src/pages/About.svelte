<script>
  import ButtonList from "../components/ButtonList.svelte";
  import Header from "../components/Header.svelte";

  let linkButtons = [
    { text: "Home", href: "#/" },
    { text: "Portfolio", href: "#/portfolio" },
  ];
</script>

<div class="background"></div>

<Header />

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
    background-color: darkgray;
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
</style>
