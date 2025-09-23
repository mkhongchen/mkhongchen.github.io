<script>
  import Header from "../components/Header.svelte";

  import ProjectBrowser from "../components/ProjectBrowser.svelte";

  import { portfolio } from "../data/portfolio.js";

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    document.documentElement.dataset.page = "portfolio";
  });

  onDestroy(() => {
    // only remove if still set to this page (prevents stomping another page)
    if (document.documentElement.dataset.page === "portfolio") {
      delete document.documentElement.dataset.page;
    }
  });
</script>

<div class="background"></div>

<Header />

<main>
  <h1>Portfolio</h1>
  <p>This is a placeholder page. Add your content here.</p>
  <ProjectBrowser projectsList={portfolio} />
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
