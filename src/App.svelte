<script>
  let name = "Hong Chen";
  let tagline = "Aspiring architect and designer. Website under development";
  import profileImage from "./assets/profile.jpg";
</script>

<main>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src={profileImage} alt="Profile photo" />

  <h1>{name}</h1>

  <p>{tagline}</p>
</main>

<style>
  main {
    text-align: center;
    margin-top: 1rem;
  }
  img {
    width: 150px;
    border-radius: 50%;
  }
</style>
