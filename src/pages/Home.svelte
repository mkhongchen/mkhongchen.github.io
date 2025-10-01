<script>
  // Component Imports
  import ButtonList from "../components/ButtonList.svelte";

  // Image Imports
  import profileImage from "../assets/profile.jpg";

  // Button Data Imports
  import { mainButtons, socialButtons } from "../data/buttons.js";

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    document.documentElement.dataset.page = "home";
  });

  onDestroy(() => {
    // only remove if still set to this page (prevents stomping another page)
    if (document.documentElement.dataset.page === "home") {
      delete document.documentElement.dataset.page;
    }
  });

  const navButtons = mainButtons.map((button) => ({
    ...button,
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "10rem",
    justifyContent: "center",
    padding: "5px 15px",
  }));
</script>

<main>
  <div class="preamble">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src={profileImage} alt="Profile photo" />

    <h1>Hong Chen</h1>
    <p>Aspiring architect and designer.</p>
    <p>Website under development.</p>
  </div>

  <ButtonList buttons={navButtons} />
  <ButtonList buttons={socialButtons} flexDirection="row" gap="1rem" />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    min-height: 90vh;
  }

  img {
    width: 12rem;
    border-radius: 50%;
  }
</style>
