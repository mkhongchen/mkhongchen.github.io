<script>
  import DesktopNav from "./DesktopNav.svelte";
  import MobileNav from "./MobileNav.svelte";
  import { onMount } from "svelte";
  import { home as baseHome, mainButtons } from "../data/buttons.js";

  let home = {
    ...baseHome,
    width: "auto",
    padding: "0.5rem",
    styleClass: "h1",
  };

  let windowWidth = 0;
  const BREAKPOINT = 768;

  onMount(() => {
    windowWidth = window.innerWidth;
    const handleResize = () => (windowWidth = window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
</script>

<header class="site-header">
  {#if windowWidth > BREAKPOINT}
    <DesktopNav {home} buttons={mainButtons} />
  {:else}
    <MobileNav {home} buttons={mainButtons} />
  {/if}
</header>

<style>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
  }
</style>
