<script>
  import ButtonList from "../components/ButtonList.svelte";

  let linkButtons = [
    { text: "Home", href: "#/" },
    { text: "Portfolio", href: "#/portfolio" },
  ];
</script>

<main>
  <h1>About Me</h1>
  <p>This is a placeholder about page. Add your content here.</p>

  <ButtonList buttons={linkButtons} />
</main>

<style>
  main {
    text-align: center;
    margin-top: 2rem;
  }
</style>
