<script>
  import { slide } from "svelte/transition";
  import TextButton from "./TextButton.svelte";
  import { onMount, onDestroy } from "svelte";

  export let home;
  export let buttons = [];

  console.log("DesktopNav component loaded!");

  let openIndex = null;

  function handleButtonClick(i, button, event) {
    console.log(
      "Clicked:",
      button.text,
      "submenu:",
      button.submenu,
      "openIndex before:",
      openIndex
    );

    if (button.submenu) {
      event.preventDefault();
      event.stopPropagation();
      openIndex = openIndex === i ? null : i; // toggle
    } else {
      // For non-submenu buttons, TextButton handles routing itself
      openIndex = null;
    }
  }

  function closeAll() {
    openIndex = null;
  }

  function handleOutsideClick(e) {
    if (!e.target.closest(".desktop-nav")) closeAll();
  }

  onMount(() => document.addEventListener("click", handleOutsideClick));
  onDestroy(() => document.removeEventListener("click", handleOutsideClick));
</script>

<nav class="desktop-nav">
  <!-- Home button -->
  <TextButton {...home} />
  <div class="nav-wrapper">
    <ul class="menu">
      {#each buttons as button, i}
        <li>
          {#if button.submenu}
            <button on:click={(event) => handleButtonClick(i, button, event)}>
              {button.text}
              <span style="margin-left: 0.3em;">▾</span>
            </button>
          {:else}
            <TextButton width="auto" {...button} />
          {/if}

          {#if openIndex === i && button.submenu}
            <div class="submenu-row" transition:slide={{ duration: 200 }}>
              {#each button.submenu as sub}
                <TextButton width="auto" {...sub} />
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
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
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .submenu-row {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw; /* full width of viewport */
    display: flex;
    justify-content: center;
    gap: 3rem;
    background: rgb(255, 255, 255);
    padding: 0.5rem 0;
    z-index: 5;
  }
</style>
