<script>
  import Header from "../components/Header.svelte";
  import ProjectBrowser from "../components/ProjectBrowser.svelte";
  import PortfolioCard from "../components/PortfolioCard.svelte";

  import { portfolio } from "../data/portfolio.js";

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    document.documentElement.dataset.page = "portfolio";
  });

  onDestroy(() => {
    if (document.documentElement.dataset.page === "portfolio") {
      delete document.documentElement.dataset.page;
    }
  });
</script>

<Header />

<main>
  <h1>Portfolio</h1>
  <ProjectBrowser projectsList={portfolio} cardComponent={PortfolioCard} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    padding-top: 3rem;
  }
</style>
