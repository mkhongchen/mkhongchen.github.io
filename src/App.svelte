<script>
  let name = "Ming Kang Chen";
  let tagline = "Aspiring architect and designer. Website under development";
</script>

<main>
  <h1>{name}</h1>
  <p>{tagline}</p>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src="/profile.jpg" alt="Profile photo" />
</main>

<style>
  main {
    text-align: center;
    margin-top: 4rem;
  }
  img {
    width: 150px;
    border-radius: 50%;
  }
</style>
