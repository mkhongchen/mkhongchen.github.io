<script>
  import Header from "../components/Header.svelte";

  import { onMount, onDestroy } from "svelte";
  import { BREAKPOINTS } from "../styles/breakpoints.js";

  onMount(() => {
    document.documentElement.dataset.page = "about";
  });

  onDestroy(() => {
    if (document.documentElement.dataset.page === "about") {
      delete document.documentElement.dataset.page;
    }
  });

  const mq =
    typeof window !== "undefined"
      ? window.matchMedia(`(min-width: ${BREAKPOINTS.desktop}px)`)
      : null;

  function updateDesktopClass() {
    if (!mq) return;
    document.documentElement.classList.toggle("is-desktop", mq.matches);
  }

  if (mq) {
    updateDesktopClass();
    if (mq.addEventListener) mq.addEventListener("change", updateDesktopClass);
    else mq.addListener(updateDesktopClass);
  }
</script>

<Header />

<main>
  <p>This is the Augmenting Robotics page. Content coming soon! -2025/12/06</p>
</main>

<style>
  /* ===== General Layout ===== */
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;
    margin-top: 3rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }
</style>
