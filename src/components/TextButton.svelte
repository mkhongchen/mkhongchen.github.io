<script>
  import Icon from "@iconify/svelte";
  export let href;
  export let text;
  export let icon;
  export let external = false;

  // Style props
  export let textColor = "white";
  export let backgroundColor = "rgba(0,0,0,0.4)";
</script>

<a
  class="text-button"
  {href}
  target={external ? "_blank" : "_self"}
  rel={external ? "noopener noreferrer" : undefined}
  style="
    color: {textColor};
    background-color: {backgroundColor};"
>
  {#if icon}
    <Icon {icon} width="clamp(0.5rem, 2vw, 1.5rem)" height="200px)" />
  {/if}
  {#if text}
    <span>{text}</span>
  {/if}
</a>

<style>
  .text-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12pt;
    width: 150px;
    height: auto;
    padding: 5px;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .text-button:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
</style>
