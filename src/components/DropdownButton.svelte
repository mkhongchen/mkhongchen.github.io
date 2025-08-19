<script>
  import TextButton from "./TextButton.svelte";
  import ButtonList from "./ButtonList.svelte";
  import { slide } from "svelte/transition";
  import Icon from "@iconify/svelte";

  export let text = "";
  export let href = "#";
  export let external = false;
  export let submenu = []; // array of { text, href, external }
  export let anchorBelow = false;

  let open = false;

  function toggleSubmenu() {
    open = !open;
  }
</script>

<div class="dropdown-button">
  <div class="main-row">
    <!-- Main label uses TextButton -->
    <TextButton {text} {href} {external} />

    <!-- Arrow toggle -->
    {#if submenu.length > 0}
      <button class="arrow-btn" on:click={toggleSubmenu}>
        <Icon icon="mdi:menu-down" width="20" height="20" />
      </button>
    {/if}
  </div>

  {#if open && submenu.length > 0}
    <div
      class="submenu-box"
      style="position: {anchorBelow ? 'absolute' : 'relative'};
      top: {anchorBelow ? '100%' : '0'};
      width: {anchorBelow ? '100%' : ''};"
      transition:slide
    >
      <ButtonList buttons={submenu} flexDirection="row" gap="0.25rem" />
    </div>
  {/if}
</div>

<style>
  .dropdown-button {
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .main-row {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .arrow-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submenu-box {
    right: 0;
    background: black;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 20;
  }
</style>
