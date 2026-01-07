<script>
  import Header from "../components/Header.svelte";
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
  <section class="video">
    <h3>Video Statement of Interest</h3>
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/M_4vCz-l0FU?si=Tvd1EFW0Be2Njp7g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <section class="script">
    <h3>Script</h3>
    <p><em>Presented script may not reflect spoken words.</em></p>
    <p>
      I'm standing in front of Calgary's “new” Central Library on this cold
      winter day to tell you a story about a guy realizing how much building
      right matters. The library, opened in 2018, was — to teenage me — the
      point where I realized that architecture isn't just about looks, but about
      how it changes the way people live. It opened my eyes to the possibility
      that libraries could be more than book repositories, but also places to
      study, play games, and create. It also pushed all the libraries around the
      city to replicate this concept — albeit only to the extent that their
      buildings allowed for. But this idea that a new library could bring a
      paradigm shift stuck with me: if this building could change libraries,
      what could other buildings do? It's getting cold though, so let's get home
      before I continue.
    </p>
    <p>
      Okay, so let's continue with a bit more about me. My name's Hong, and I
      recently finished an undergraduate degree in architecture and minor in
      computer science at the University of Toronto. UofT's program really
      taught me how to think like a designer, and I got drawn to the mixing of
      technology and architecture. But, over the past bit, I started wanting to
      do more than tech for tech's sake. I wanted to figure out how to use my
      tech training to help people — particularly in justice-focused and
      environmentally conscious ways. I believe that SAPL represents a chance
      for me to continue thinking tech — with its burgeoning robotics labs — and
      a chance to have a change of pace, really focusing in on the why's and
      how's of architecture. I think, more than anything, I want a place where I
      can keep asking better questions — and be part of an environment that
      encourages finding the answers. That's what SAPL means to me.
    </p>
  </section>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    margin-top: 4rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .video {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .video-wrapper {
    position: relative;
    width: 80%;
    padding-top: 45%;
    margin: 0 auto;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  h3,
  p {
    text-align: left;
  }
</style>
