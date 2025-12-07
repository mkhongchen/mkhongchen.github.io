<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import AugmentingRobotics from "./pages/AugmentingRobotics.svelte";

  const routes = {
    "/": Home,
    "/about": About,
    "/portfolio": Portfolio,
    "/AugmentingRobotics": AugmentingRobotics,
  };
</script>

<Router {routes} useHash={true} />
