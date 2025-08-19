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
  export let scrollTo = "";
  export let scrollOffset = 100;

  function scrollToSection(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      // Get the element's position relative to the document
      const y = el.getBoundingClientRect().top + window.scrollY - scrollOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  function handleClick(event) {
    // If scrollTo is set, prevent default navigation and scroll
    if (scrollTo) {
      event.preventDefault();
      scrollToSection(scrollTo);
    }
  }
</script>

<a
  class="text-button"
  {href}
  target={external ? "_blank" : "_self"}
  rel={external ? "noopener noreferrer" : undefined}
  on:click={handleClick}
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
