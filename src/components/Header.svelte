<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import ButtonList from "./ButtonList.svelte";
  import TextButton from "./TextButton.svelte";
  import { home, mainButtons } from "../data/buttons";
  import { BREAKPOINTS } from "../styles/breakpoints.js";

  const navLinks = mainButtons.map((button) => ({
    ...button,
    backgroundColor: "rgba(0,0,0,0.0)",
    width: "auto",
    justifyContent: "flex-end",
  }));

  const navLinksDesk = mainButtons.map((button) => ({
    ...button,
    backgroundColor: "rgba(0,0,0,0.0)",
    width: "auto",
    justifyContent: "flex-end",
  }));

  let showMenu = false;
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
  class:open={showMenu}
  style="align-items: {windowWidth > 768 ? 'end' : 'center'};"
>
  <TextButton {...home} />

  {#if windowWidth > BREAKPOINTS.desktop}
    <!-- Desktop nav -->
    <ButtonList
      buttons={navLinks}
      showSubmenu={true}
      flexDirection="row"
      anchorBelow={true}
      gap="0.5rem"
    />
  {:else}
    <!-- Mobile hamburger menu -->
    <button class="hamburger" on:click={toggleMenu}> &#9776; </button>

    {#if showMenu}
      <div class="mobile-menu-container" transition:slide>
        <ButtonList
          buttons={navLinks}
          showSubmenu={true}
          alignItems="flex-end"
        />
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
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.589);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
  }

  /* when open, let header expand vertically so the same backdrop-filter covers menu */
  .header.open {
    /* keep main header content on one line */
    align-items: center;
    /* allow the menu to move to the next line without turning the header into a column */
    flex-wrap: wrap;
    padding-bottom: 1rem;
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
    background: rgba(0, 0, 0, 0.589);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    /* no backdrop-filter here when we want the header to do the blurring */
  }

  .header.open .mobile-menu-container {
    /* stay inside the header so the header backdrop-filter affects it,
       but occupy a new full-width row below the header content */
    position: static;
    order: 99;
    flex-basis: 100%;
    width: 100%;
    padding: 1rem 1.5rem;
    background: transparent; /* header already provides the translucent background */
    box-shadow: none;
  }
</style>
