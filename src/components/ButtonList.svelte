<script>
  import TextButton from "./TextButton.svelte";
  import IconButton from "./IconButton.svelte";
  import DropdownButton from "./DropdownButton.svelte";

  export let buttons = [];
  export let flexDirection = "column";
  export let gap = "2rem";
  export let showSubmenu = false;
  export let alignItems = "center";
</script>

<div
  class="button-list"
  style="display: flex; flex-direction: {flexDirection}; gap: {gap}; align-items: {alignItems};"
>
  {#each buttons as button}
    {#if button.submenu && showSubmenu}
      <DropdownButton {...button} />
    {:else if button.text}
      <TextButton {...button} />
    {:else}
      <IconButton {...button} />
    {/if}
  {/each}
</div>
