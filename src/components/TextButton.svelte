<script>
  export let href;
  export let text;
  export let external = false;

  import { push } from "svelte-spa-router";

  // Style props
  export let textColor = "white";
  export let fontSize = `12pt`;
  export let backgroundColor = "rgba(0,0,0,0)";
  export let width = "150px";
  export let justifyContent = "center";
  export let scrollTo = "";
  export let offset = 80;
  export let padding = "5px";

  function handleClick(event) {
    if (external) return;

    event.preventDefault();

    if (href) {
      push(href).then(() => {
        if (scrollTo) {
          setTimeout(() => {
            const el = document.getElementById(scrollTo.replace(/^#/, ""));
            if (el) {
              const rect = el.getBoundingClientRect();
              const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
              const targetY = rect.top + scrollTop - offset;
              window.scrollTo({ top: targetY, behavior: "smooth" });
            }
          }, 100); // Adjust delay if needed
        }
      });
    }
  }
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
    justify-content: {justifyContent};
    padding: {padding};"
  on:click={handleClick}
>
  <span>{text}</span>
</a>

<style>
  .text-button {
    height: auto;
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
