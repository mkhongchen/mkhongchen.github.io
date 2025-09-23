<script>
  import { slide } from "svelte/transition";
  import TextButton from "./TextButton.svelte";

  export let home;
  export let buttons = [];

  let openIndex = null;
  let closeTimeout;

  function handleMouseEnter(i) {
    clearTimeout(closeTimeout);
    openIndex = i;
  }

  function handleMouseLeave() {
    // Delay closing so user can move to submenu
    closeTimeout = setTimeout(() => {
      openIndex = null;
    }, 200); // 200ms decay
  }

  function handleSubmenuEnter() {
    clearTimeout(closeTimeout);
  }

  function handleSubmenuLeave() {
    closeTimeout = setTimeout(() => {
      openIndex = null;
    }, 200);
  }
</script>

<nav class="desktop-nav" on:mouseleave={handleMouseLeave}>
  <!-- Home button -->
  <TextButton {...home} />
  <div class="nav-wrapper">
    <ul class="menu">
      {#each buttons as button, i}
        <li class="nav-item" on:mouseenter={() => handleMouseEnter(i)}>
          <div class="nav-link">
            <!-- Top-level nav button -->
            <TextButton {...button} width="auto" />

            {#if button.submenu}
              <span class="dropdown-indicator"> ▾ </span>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    {#if openIndex !== null && buttons[openIndex].submenu}
      <div
        class="submenu-row"
        role="menu"
        tabindex="-1"
        on:mouseenter={handleSubmenuEnter}
        on:mouseleave={handleSubmenuLeave}
        transition:slide={{ duration: 200 }}
      >
        {#each buttons[openIndex].submenu as sub}
          <!-- Submenu buttons -->
          <TextButton {...sub} width="auto" />
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  .desktop-nav {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 10;
  }

  .menu {
    display: flex;
    gap: 4rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .dropdown-indicator {
    font-size: 0.8rem;
    line-height: 1;
    user-select: none;
  }

  .submenu-row {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw; /* full width of viewport */
    display: flex;
    justify-content: center;
    gap: 3rem;
    background: rgba(20, 20, 20, 0.8);
    padding: 0.5rem 0;
    z-index: 5;
  }
</style>
