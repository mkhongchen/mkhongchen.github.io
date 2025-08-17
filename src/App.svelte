<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Portfolio from "./pages/Portfolio.svelte";

  const routes = {
    "/": Home,
    "/about": About,
    "/portfolio": Portfolio,
  };
</script>

<Router {routes} useHash={true} />
