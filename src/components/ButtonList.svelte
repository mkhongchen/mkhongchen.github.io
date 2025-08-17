<script>
  import TextButton from "./TextButton.svelte";
  import IconButton from "./IconButton.svelte";

  export let buttons = [];
  export let align = "center";
  export let flexDirection = "column";
  export let gap = "2rem";
</script>

<div
  class="button-list"
  style="display: flex; flex-direction: {flexDirection}; align-items: {align}; gap: {gap};"
>
  {#each buttons as button}
    {#if button.text}
      <TextButton {...button} />
    {:else}
      <IconButton {...button} />
    {/if}
  {/each}
</div>
