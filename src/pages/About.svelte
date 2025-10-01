<script>
  import Header from "../components/Header.svelte";
  import profileImage from "../assets/profile.jpg";
  import ButtonList from "../components/ButtonList.svelte";

  import { socialButtons, fileButtons } from "../data/buttons";
  import { sourceCode, contactLink, emailLink } from "../data/textlinks.js";

  import svelteIcon from "../assets/svelte.svg";
  import viteIcon from "../assets/vite.svg";
  import Icon from "@iconify/svelte";

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
  <section id="about-me">
    <h1 class="about-header">About Me</h1>
    <div class="about-text">
      <p>
        Hello! I'm Mingkang (Hong) Chen, an aspiring architect and creative
        exploring the myriad of ways that technology and creativity intersect.
      </p>

      <p>
        I am a recent graduate from the University of Toronto's Daniel's Faculty
        of Landscape, Architecture, and Design; where I obtained a Bachelor of
        Arts - Architectural Studies (Technology Specialist), as well as a Minor
        in Computer Science from the Faculty of Arts and Science (Department of
        Computer Science).
      </p>
      <p>
        I am currently pursuing a career in architecture, with a keen interest
        in utilizing computational design and digital fabrication to push the
        envelope of innovative architecture. I am open to working in a variety
        of roles, be it design, design technology, visualization, or anything
        else that my skills might be useful in! If you would like to get in
        touch with me about opportunities, please feel free to reach out via my
        contact form <a {...contactLink}>here</a> or contact me via my email at:
        <a {...emailLink}>{emailLink.note}</a>.
      </p>
      <p>
        During my time in university, as well as during my childhood, I grew to
        have a deep passion for all things tech, be it hardware or software. In
        fact, I began tinkering with computers from quite a young age, building
        my first desktop computer at the age of 14, and learning how to
        customize and modify Minecraft versions and servers by grade 7.
      </p>
      <p>
        Nowadays, I am deeply interested in balancing industrial tools with DIY
        attitudes to achieve personalised solutions and designs for the problems
        we face. In fact, that attitude is one of the major reasons that this
        website exists! Though web development might not be a core competency
        required in architecture (or many design jobs for that matter), it is my
        belief that being a strong designer is through having a diverse exposure
        to tools and mediums that can be leveraged to solve our many diverse
        design problems.
      </p>
    </div>

    <div class="about-profile flex-column-center">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={profileImage} alt="Profile Picture" />
      <p>Me on my condo balcony (Circa 2022)</p>
    </div>

    <div class="about-links flex-column-center">
      <p>Find me on:</p>
      <ButtonList buttons={socialButtons} flexDirection="row" gap="1rem" />
      <p>Get a PDF of my resume and portfolio here:</p>
      <ButtonList buttons={fileButtons} flexDirection="row" gap="1rem" />
    </div>
  </section>

  <section id="about-site">
    <h1 class="about-site-header">About The Website</h1>
    <div class="about-site-text">
      <p>
        This website is going to be the future home for all of my major projects
        and a place for me to share any relevant developments in my professional
        life. The current plan is to include: photo series, architectural
        projects, and other professionally relevant projects. It could also
        potentially include blogs, a catalog of video content, or a myriad of
        other things dependent on my future explorations and interests.
      </p>

      <p>
        Have any suggestions or questions? Feel free to reach out via my contact
        form <a {...contactLink}>here</a>.
      </p>
      <h2>The Tech</h2>
      <p>
        This website is built using Svelte and Vite, with Svelte-SPA-Router for
        client-side routing. The programming for the site was done by myself,
        with coding assistance and input from ChatGPT and CoPilot. Some pages
        may also redirect to other services (e.g., Adobe Portfolio for contact
        forms, CloudFlare for CDN) to reduce complexity.
      </p>
      <p>
        The website is hosted on GitHub Pages, with the source code available
        <a {...sourceCode}>here</a>
      </p>
    </div>

    <div class="site-icons flex-column-center">
      <div class="site-software">
        <img src={svelteIcon} alt="Svelte Logo" width="50" />
        <h1>+</h1>
        <img src={viteIcon} alt="Vite Logo" width="50" />
      </div>

      <div class="gpt flex-row-center">
        <Icon icon="arcticons:openai-chatgpt" width="50" />
        <h1>&</h1>
        <Icon icon="ri:copilot-fill" width="50" />
      </div>
    </div>
  </section>
  <p class="bottom-text">Last Updated: 2025-09-27</p>
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
    margin-top: 4rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  section {
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    max-width: 1200px;
  }

  p {
    text-align: left;
    margin: 0.5rem 0;
  }

  /* ===== Utility Classes ===== */
  .flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .flex-row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  /* ===== About Me Section ===== */
  .about-header,
  .about-site-header {
    order: -2;
  }

  .about-profile {
    order: -1;
  }

  .about-profile img {
    width: 200px;
    border-radius: 50%;
  }

  .about-links p {
    text-align: center;
  }

  /* ===== About Site Section ===== */
  .about-site-text h2 {
    margin-top: 4rem;
  }

  /* ===== Icons ===== */
  .site-icons {
    margin-top: 1rem;
  }

  .site-software,
  .gpt {
    margin-top: 1rem;
    gap: 1rem;
  }

  /* ===== Bottom Text ===== */
  .bottom-text {
    font-size: 0.7rem;
    text-align: center;
  }

  /* ===== Desktop Overrides ===== */
  :global(.is-desktop) #about-me,
  :global(.is-desktop) #about-site {
    grid-template-columns: 2fr 1fr;
  }

  :global(.is-desktop) .about-text,
  :global(.is-desktop) .about-site-text {
    grid-column: 1;
    grid-row: 2 / span 2;
    text-align: left;
  }

  :global(.is-desktop) .about-profile {
    order: 0;
    grid-column: 2;
    grid-row: 2;
  }

  :global(.is-desktop) .about-links {
    grid-column: 2;
    grid-row: 3;
  }

  :global(.is-desktop) .site-icons {
    grid-column: 2;
    grid-row: 2;
    flex-direction: column;
  }
</style>
