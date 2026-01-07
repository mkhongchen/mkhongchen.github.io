<script>
  import Header from "../components/Header.svelte";
  import ProjectPageHeader from "../components/ProjectPageHeader.svelte";
  import IconButton from "../components/IconButton.svelte";

  import { formatDate } from "../lib/helpers.js";
  import { onMount, onDestroy } from "svelte";
  import { BREAKPOINTS } from "../styles/breakpoints.js";

  import { portfolio } from "../data/portfolio";
  const project = portfolio.find((p) => p.name === "Augmenting Robotics");

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
  <p>This is the UCA Video Statement page.</p>
</main>
