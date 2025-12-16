<script>
  import Icon from "@iconify/svelte";
  export let href;
  export let icon;
  export let external = false;

  // Style props
  export let backgroundColor = "rgba(0,0,0,0.3)";
</script>

<a
  class="icon-button"
  {href}
  target={external ? "_blank" : "_self"}
  rel={external ? "noopener noreferrer" : undefined}
  style="
    background-color: {backgroundColor};
  "
>
  <Icon {icon} width="15px" height="15px" />
</a>

<style>
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 50%;
    aspect-ratio: 1/1;
    padding: 10px;
    color: white;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .icon-button:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
</style>
