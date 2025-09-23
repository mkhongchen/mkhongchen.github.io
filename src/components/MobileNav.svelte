<script>
  import { slide } from "svelte/transition";
  import TextButton from "./TextButton.svelte";

  export let home;
  export let buttons = [];

  let showMenu = false;
  let openSubmenus = [];

  function toggleMenu() {
    showMenu = !showMenu;
    if (!showMenu) openSubmenus = [];
  }

  function toggleSubmenu(index) {
    if (openSubmenus.includes(index)) {
      openSubmenus = openSubmenus.filter((i) => i !== index);
    } else {
      openSubmenus = [...openSubmenus, index];
    }
  }
</script>

<nav class="mobile-nav">
  <TextButton {...home} />

  <button class="hamburger" on:click={toggleMenu} aria-label="Open menu">
    &#9776;
  </button>

  {#if showMenu}
    <div class="mobile-menu" transition:slide={{ duration: 200 }}>
      {#each buttons as button, i}
        <div class="menu-item">
          <div class="button-row">
            <!-- Main button navigates -->
            <TextButton width="auto" {...button} />

            <!-- Dropdown arrow toggles submenu -->
            {#if button.submenu}
              <button
                class="submenu-toggle"
                aria-label="Toggle submenu"
                on:click={() => toggleSubmenu(i)}
                class:open={openSubmenus.includes(i)}
              >
                ▾
              </button>
            {/if}
          </div>

          {#if button.submenu && openSubmenus.includes(i)}
            <div class="submenu" transition:slide={{ duration: 200 }}>
              {#each button.submenu as sub}
                <TextButton {...sub} />
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .mobile-nav {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
  }

  .hamburger {
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 3rem;
    box-sizing: border-box;
    z-index: 99;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
  }

  .button-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .submenu-toggle {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
  }

  .submenu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 1rem;
    gap: 0.25rem;
  }
</style>
