<script>
  import TextButton from "./TextButton.svelte";
  import IconButton from "./IconButton.svelte";
  import DropdownButton from "./DropdownButton.svelte";

  export let buttons = [];
  export let flexDirection = "column";
  export let gap = "2rem";
  export let showSubmenu = false;
  export let alignItems = "center";
  export let anchorBelow = false;
  export let justifyContent = "center";
</script>

<div
  class="button-list"
  style="display: flex; flex-direction: {flexDirection}; gap: {gap}; align-items: {alignItems}; justify-content: {justifyContent};"
>
  {#each buttons as button}
    {#if button.submenu && showSubmenu}
      <DropdownButton {...button} {anchorBelow} />
    {:else if button.text}
      <TextButton {...button} />
    {:else}
      <IconButton {...button} />
    {/if}
  {/each}
</div>
