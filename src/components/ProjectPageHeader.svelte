<script>
  export let title = "";
  export let subtitle = "";
  export let people = [];
  export let date = "";
  export let type = "";
</script>

<header class="project-header">
  <h1>{title}</h1>
  {#if subtitle}
    <h4><em>{subtitle}</em></h4>
  {/if}
  <p>
    {people.join(", ")} | {date} | {type}
  </p>
</header>

<style>
  .project-header {
    gap: 0.25rem;
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
  }

  h1,
  h4,
  p {
    text-align: left;
    margin: 0rem;
  }
</style>
