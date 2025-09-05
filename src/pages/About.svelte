<script>
  import Header from "../components/Header.svelte";
  import profileImage from "../assets/profile.jpg";
  import { BREAKPOINTS } from "../styles/breakpoints.js";

  import ButtonList from "../components/ButtonList.svelte";
  import { mainButtons, socialButtons } from "../data/buttons";
  import { sourceCode, contactLink } from "../data/textlinks.js";

  import svelteIcon from "../assets/svelte.svg";
  import viteIcon from "../assets/vite.svg";
  import Icon from "@iconify/svelte";

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    document.documentElement.dataset.page = "about";
  });

  onDestroy(() => {
    // only remove if still set to this page (prevents stomping another page)
    if (document.documentElement.dataset.page === "about") {
      delete document.documentElement.dataset.page;
    }
  });

  const contactButton = mainButtons.find((btn) => btn.text === "Contact");

  // use matchMedia to set a class instead of relying on var() in @media
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
    // support both modern and older browsers
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

    <div class="about-profile">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={profileImage} alt="Profile Picture" />
      <p>Me on my condo balcony (Circa 2022)</p>
    </div>

    <div class="about-links">
      <p>Find me on:</p>
      <ButtonList buttons={socialButtons} flexDirection="row" gap="1rem" />
      <p>Get a PDF of my resume and portfolio here:</p>
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
        client-side routing. The programming for the site was done entirely by
        myself, with guiding input from ChatGPT and CoPilot.
      </p>
      <p>
        The website is hosted on GitHub Pages, with the source code available
        <a {...sourceCode}>here</a>
      </p>
    </div>

    <div class="site-icons">
      <div class="site-software">
        <img src={svelteIcon} alt="Svelte Logo" width="50" />
        <h1>+</h1>
        <img src={viteIcon} alt="Vite Logo" width="50" />
      </div>

      <div class="gpt">
        <Icon icon="arcticons:openai-chatgpt" width="50" />
        <h1>&</h1>
        <Icon icon="ri:copilot-fill" width="50" />
      </div>
    </div>
  </section>
  <p class="bottom-text">Last Updated: 2025-09-04</p>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10rem;
    padding-top: 20px;
  }
  #about-me {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    margin: 0 auto;
    max-width: 1200px;
  }

  :global(.is-desktop) #about-me {
    grid-template-columns: 2fr 1fr;
  }

  .about-header {
    order: -2;
  }

  .about-text p {
    text-align: left;
  }

  :global(.is-desktop) .about-text {
    grid-column: 1;
    grid-row: 2 / span 2;
    text-align: left;
  }

  .about-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    order: -1;
  }

  .about-profile img {
    width: 200px;
    border-radius: 50%;
  }

  .about-profile p {
    font-size: 0.8rem;
    color: white;
    margin: 0;
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

  #about-site {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    margin: 0 auto;
    max-width: 1200px;
  }

  :global(.is-desktop) #about-site {
    grid-template-columns: 2fr 1fr;
  }

  .about-site-header {
    order: -2;
  }

  .about-site-text p {
    align-self: flex-start;
    text-align: left;
  }

  .about-site-text h2 {
    margin-top: 4rem;
  }

  :global(.is-desktop) .about-site-text {
    grid-column: 1;
    grid-row: 2;
  }

  .site-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    margin-top: 1rem;
    justify-content: center;
  }

  :global(.is-desktop) .site-icons {
    grid-column: 2;
    grid-row: 2;
  }

  :global(.is-desktop) .site-icons {
    flex-direction: column;
  }

  .site-software {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .gpt {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .bottom-text {
    font-size: 0.7rem;
  }
</style>
