<script>
  export let href;
  export let text;
  export let external = false;

  // Style props
  export let textColor = "white";
  export let fontSize = `12pt`;
  export let backgroundColor = "rgba(0,0,0,0.4)";
  export let width = "150px";
  export let justifyContent = "center";
</script>

<a
  class="text-button"
  {href}
  target={external ? "_blank" : "_self"}
  rel={external ? "noopener noreferrer" : undefined}
  style="
    font-size: {fontSize};
    color: {textColor};
    background-color: {backgroundColor};
    width: {width};
    display: flex;
    justify-content: {justifyContent};"
>
  <span>{text}</span>
</a>

<style>
  .text-button {
    height: auto;
    padding: 5px;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    box-sizing: border-box;
  }

  .text-button:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
</style>
