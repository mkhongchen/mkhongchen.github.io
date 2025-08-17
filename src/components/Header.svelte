<script>
  import { onMount } from "svelte";
  import ButtonList from "./ButtonList.svelte";
  import TextButton from "./TextButton.svelte";
  import { home, mainButtons } from "../data/buttons";

  const navLinks = mainButtons.map((button) => ({
    ...button,
    backgroundColor: "rgba(0,0,0,0.0)",
    width: "auto",
    justifyContent: "flex-end",
  }));

  let showMenu = false; // controls mobile hamburger menu

  let windowWidth = 0;

  onMount(() => {
    windowWidth = window.innerWidth;
    const handleResize = () => (windowWidth = window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<nav
  class="header"
  style="align-items: {windowWidth > 768 ? 'end' : 'centre'};"
>
  <TextButton {...home} />

  {#if windowWidth > 768}
    <!-- Desktop nav -->
    <ButtonList buttons={navLinks} flexDirection="row" gap="0.5rem" />
  {:else}
    <!-- Mobile hamburger menu -->
    <button class="hamburger" on:click={toggleMenu}> &#9776; </button>
    {#if showMenu}
      <div class="mobile-menu-container">
        <ButtonList buttons={navLinks} />
      </div>
    {/if}
  {/if}
</nav>

<style>
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: black; /* Or your preferred color */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
  }

  .hamburger {
    font-size: 1rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .mobile-menu-container {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 1rem 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    background: black;
  }
</style>
