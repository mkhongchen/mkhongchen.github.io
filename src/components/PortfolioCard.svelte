<script>
  export let background_image;
  export let thumbnail;
  export let name;
  export let date;
  export let type;
  export let people = [];
  export let page = "#"; //TODO: INSERT 404
  export let external = false;
</script>

<a
  class="portfolio-card"
  href={page}
  target={external ? "_blank" : "_self"}
  rel={external ? "noopener noreferrer" : undefined}
>
  {#if background_image}
    <div
      class="background"
      style="background-image: url({background_image});"
    ></div>
  {/if}

  <div class="type-indicator" style="background-color: {type.color};"></div>
  <div class="content">
    {#if thumbnail}
      <img class="thumbnail" src={thumbnail} alt={name} />
    {/if}

    <div class="info">
      <h2>{name}</h2>

      {#if date}
        <p class="date">
          {date instanceof Date
            ? date.toLocaleDateString(undefined, {
                month: "long",
                year: "numeric",
              })
            : date}
        </p>
      {/if}

      {#if people.length}
        <p class="collaborators">
          {people.join(", ")}
        </p>
      {/if}
    </div>
  </div>
</a>

<style>
  .portfolio-card {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    text-decoration: none;
    color: inherit;
    border-radius: 0 0.5rem 0.5rem 0;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); /* drop shadow */
    background: rgba(255, 255, 255, 0.05); /* fallback behind bg image */
    height: 170px;
  }

  /* Full-cover background */
  .background {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: 0;
    filter: brightness(0.5);
  }

  /* Type color swatch on the left */
  .type-indicator {
    width: 0.5rem;
    flex-shrink: 0;
    z-index: 1;
  }

  /* Content wraps thumbnail + text */
  .content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    z-index: 1;
  }

  .thumbnail {
    height: 160px;
    width: 160px;
    object-fit: cover;
    border-radius: 0.25rem;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    align-items: flex-start;
  }

  h2 {
    margin: 0;
    margin-bottom: -0.5rem;
    font-size: 1.6rem;
  }

  .date {
    margin: 0;
    padding-bottom: 0.5rem;
  }

  .collaborators {
    margin: 0;
    font-size: 0.8rem;
    text-align: left;
  }
</style>
