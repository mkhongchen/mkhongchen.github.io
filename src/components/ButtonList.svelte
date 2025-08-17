<script>
  import TextButton from "./TextButton.svelte";
  import IconButton from "./IconButton.svelte";

  export let buttons = [];
  export let flexDirection = "column";
  export let gap = "2rem";
</script>

<div
  class="button-list"
  style="display: flex; flex-direction: {flexDirection}; gap: {gap};"
>
  {#each buttons as button}
    {#if button.text}
      <TextButton {...button} />
    {:else}
      <IconButton {...button} />
    {/if}
  {/each}
</div>
