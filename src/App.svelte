<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import AboutMe from "./pages/AboutMe.svelte";

  const routes = {
    "/": Home,
    "/about": About,
    "/portfolio": Portfolio,
    "/about/about-me": AboutMe,
  };
</script>

<Router {routes} useHash={true} />
