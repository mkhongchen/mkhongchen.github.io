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
  <p>
    This is the Augmenting Robotics page. More content coming soon! -2025/12/16
  </p>
  <section class="project-header">
    <ProjectPageHeader
      title={project.name}
      subtitle="Exploring AR integration with robotics"
      people={project.people}
      date={formatDate(project.date)}
      type={project.type.name}
    />
    <div class="pdf-links">
      <p>Project Booklet:</p>
      <IconButton
        href="files.mkhongchen.ca/AR_BookletA.pdf"
        icon="ph:file-light"
        external={true}
      />
      <p>Supplementary Booklet:</p>
      <IconButton
        href="files.mkhongchen.ca/AR_BookletB.pdf"
        icon="ph:file-light"
        external={true}
      />
      <p>Project Presenation:</p>
      <IconButton
        href="files.mkhongchen.ca/AR_Presentation.pptx"
        icon="mdi-light:presentation"
        external={true}
      />
    </div>
  </section>
  <section class="video">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/vnrVSvhk2-8?si=KgGOdPhpNS_nWJIk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <p><em>Augmenting Robotics - Dynamic Actions Codes</em></p>
  </section>
  <section class="background">
    <h2>Premise</h2>
    <p>
      Using an interactive AR system to enable human-in-the-loop interactions
      with a robot system can lead to new methods of interaction and an
      expansion in robotic capabilities.
    </p>
    <p>
      <strong>AR systems</strong> can display otherwise non-visual data in a way
      that is natural and intuitive. As such, they can be used in tandem with complex
      systems that rely on / generate hidden data in such a way that is understandable
      to novices. Furthermore, by allowing these systems to be interactive (that
      is, capable of manipulating hidden data), other systems - such as robotic arms
      - can have their capabilities enhanced through human-in-the-loop methodologies
      and processes.
    </p>
    <p>
      Repeated investigations into the augmented reality techniques in
      education, entertainment, and industry have demonstrated that individuals
      can interact with mixed virtual / physical environments with a high degree
      of capability. Though they often require a level of training to achieve
      these metrics, the training that they receive generally is no more
      extensive than training on any other consumer-grade system. Therefore, it
      is reasonable to assume that AR technologies could be used to facilitate
      non-experts to meaningfully interact with complex systems such as robotic
      arms. Though a burgeoning subfield in architecture, robotics has remained
      a domain restricted to those who are able to spend considerable time
      learning the specific ins and outs of robot programming. The need for this
      training is restricting designers from exploring robotics - thus limiting
      innovation and adoption in the field. Thus, if a new AR system could be
      implemented such that it would bypass some portion of the previously
      required training, greater accessibility to the field could be achieved.
      Additionally, AR systems can redefine the role of humans in robotic
      programs - allowing designers to collaborate with robots rather than
      simply programming and observing them. By introducing human-in-the-loop
      processes via AR platforms, robotics can become more site-aware without
      the need for expensive sensor suites and complex onboard computing. By
      using AR, architects and designers can take more active roles in with
      robots - both in the lab and on the jobsite.
    </p>
    <h2>Scope</h2>
    <p>
      The underlying goal for this project is to create a system that utilizes
      AR technologies as the dominant way to interact with a robotic system (in
      this case a UR10e). This means that programming of the robot will be done
      predominantly in AR, with interventions via conventional means only
      occurring when issues arise or to highlight another aspect of the AR
      system.
    </p>
    <p>
      Due to time constraints, limitations in resources, and access time to the
      robotic arms, any large-scale fabrication attempts with the system will
      not be trialed - and as such, any experimentation will be limited in to
      merely showcasing the capabilities of script. This issue is further
      exasperated by the development time of the script, and the generalist
      nature of the design, which could furthermore increase the lead times
      required to create anything at scale.
    </p>
    <p>
      Additionally, the project will focus on providing the human operator with
      as much control over the system as possible. Although human-in-the-loop
      systems can often vary in the role that a human operator plays, the
      secondary nature of the project being one aimed at allowing non-experts
      access to the robotic systems means that operator control is paramount
      (especially if the project is to be viewed as one for non-experts to learn
      about the robots as well). As such, exploration into creating additional
      algorithms or computational processes to autonomously augment the
      capabilities of the robots will not be conducted.
    </p>
    <p>
      Furthermore, with the latest iteration of this project being one with an
      interest in dynamically placed geometry, previous exploration into remote
      control of the robot via AR will no longer be explored. This is due to the
      need for a human operator with AR equipment to be onsite so they can
      detect the fiducial markers that are necessary for allowing the program to
      place geometry in space dynamically.
    </p>
  </section>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 6rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .project-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .pdf-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 0rem;
  }

  .video {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .video p {
    margin: 0;
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

  .background {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0rem;
  }

  h2,
  p {
    text-align: left;
  }
</style>
