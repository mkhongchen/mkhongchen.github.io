<script>
  // Icon imports
  import Icon from "@iconify/svelte";

  // Content props
  export let buttons = [];

  // Style props
  export let textColor = "white";
  export let backgroundColor = "rgba(0,0,0,0.4)";
  export let borderColor = "black";

  //Layout props
  export let align = "center";
  export let flexDirection = "column";

  //Button props
  export let round = false;
</script>

<div
  class="button-container"
  style="
    display: flex;
    flex-direction: {flexDirection};
    align-items: {align};
    gap: 1rem;
    margin: 1rem auto;
    justify-content: center
  "
>
  {#each buttons as button}
    <a
      class="btn"
      href={button.href}
      target={button.external ? "_blank" : "_self"}
      rel={button.external ? "noopener noreferrer" : undefined}
      style="
        color: {textColor};
        background-color: {backgroundColor};
        border-color: {borderColor};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.5rem, 2vw, 1.5rem);
        
        padding: {round ? '0.65rem' : '0.5rem 1rem'};
        width: {round
        ? 'clamp(0.5rem, 2vw, 1.5rem)'
        : 'clamp(10rem, 20vw, 20rem)'};
        height: {round ? 'clamp(0.5rem, 2vw, 1.5rem)' : 'auto'};
        border-radius: {round ? '50%' : '2vw'};
      "
    >
      {#if button.icon}
        <Icon
          icon={button.icon}
          width="clamp(0.5rem, 2vw, 1.5rem)"
          height="clamp(0.5rem, 2vw, 1.5rem)"
        />
      {/if}
      {#if button.text}
        <span>{button.text}</span>
      {/if}
    </a>
  {/each}
</div>

<style>
  .btn {
    text-decoration: none;
    border-radius: 6px;
    transition:
      background-color 0.3s,
      transform 0.2s;
    text-align: center;
    word-wrap: break-word;
    white-space: normal;
  }

  .btn:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
</style>
