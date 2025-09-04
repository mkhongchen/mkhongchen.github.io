<script>
  import Header from "../components/Header.svelte";
  import profileImage from "../assets/profile.jpg";
  import { BREAKPOINTS } from "../styles/breakpoints.js";

  import ButtonList from "../components/ButtonList.svelte";
  import { socialButtons } from "../data/buttons";

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

<div class="background"></div>

<Header />

<main>
  <section id="about-me">
    <div class="about-container">
      <h1 class="about-header">About Me</h1>
      <div class="about-text">
        <p>
          Hello! I'm Mingkang (Hong) Chen, an aspiring architect and creative
          exploring the myriad of ways that technology and creativity intersect.
        </p>

        <p>
          I am a recent graduate from the University of Toronto's Daniel's
          Faculty of Landscape, Architecture, and Design; where I obtained a
          Bachelor of Arts - Architectural Studies (Technology Specialist), as
          well as a Minor in Computer Science from the Faculty of Arts and
          Science (Department of Computer Science).
        </p>
        <p>
          During my time in university, as well as during my childhood, I grew
          to have a deep passion for all things tech, be it hardware or
          software. In fact, I began tinkering with computers from quite a young
          age, building my first desktop computer at the age of 14, and learning
          how to customize and modify Minecraft versions and servers by grade 7.
        </p>
        <p>
          Nowadays, I am deeply interested in balancing industrial tools with
          DIY attitudes to achieve personalised solutions and designs for the
          problems we face. In fact, that attitude is one of the major reasons
          that this website exists! Though web development might not be a core
          competency required in architecture (or many design jobs for that
          matter), it is my belief that being a strong designer is through
          having a diverse exposure to tools and mediums that can be leveraged
          to solve our many diverse design problems.
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
    </div>
  </section>

  <section id="about-site">
    <h1>About The Website</h1>
    <p>This is a placeholder about page. Add your content here.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
    <p>This is placeholder text.</p>
  </section>
</main>

<style>
  /* Make the entire page have the background */
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(20, 20, 20);
    z-index: -1; /* Ensure background stays behind content */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    padding-top: 50px;
  }

  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    max-width: 1000px;
    margin: 0 auto;
  }

  :global(.is-desktop) .about-container {
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
</style>
