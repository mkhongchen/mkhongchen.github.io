<script>
  import { slide } from "svelte/transition";
  import { filterByType, filterByYear, getYears } from "../lib/filters.js";
  import { sortAlpha, sortByDate } from "../lib/sorters.js";

  export let projectsList = [];
  export let cardComponent;

  // --- state ---
  let sortOption = "default"; // "default" | "alpha" | "date"
  let sortDirection = "desc"; // "asc" | "desc"
  let filterOpen = false; // true = filters dropdown visible
  let filterType = []; // array of selected types
  let filterYear = []; // array of selected years

  function toggleType(type) {
    if (filterType.includes(type)) {
      filterType = filterType.filter((t) => t !== type);
    } else {
      filterType = [...filterType, type];
    }
  }

  function toggleYear(year) {
    if (filterYear.includes(year)) {
      filterYear = filterYear.filter((y) => y !== year);
    } else {
      filterYear = [...filterYear, year];
    }
  }

  // --- dynamic options ---
  const typeOptions = [...new Set(projectsList.map((p) => p.type.name))];
  const yearOptions = getYears(projectsList, "desc");

  // --- filtered + sorted projects ---
  $: filtered = [
    ...filterByYear(filterByType(projectsList, filterType), filterYear),
  ].sort((a, b) => {
    // @ts-ignore
    if (sortOption === "alpha") return sortAlpha(a, b, sortDirection);
    // @ts-ignore
    if (sortOption === "date") return sortByDate(a, b, sortDirection);
    return 0; // default = original array order
  });
</script>

<div class="project-browser-wrapper">
  <!-- --- Controls --- -->
  <div class="toolbar">
    <!-- Sort buttons -->
    <button
      class:active={sortOption === "default"}
      on:click={() => {
        sortOption = "default";
      }}
    >
      Default
    </button>

    <button
      class:active={sortOption === "alpha"}
      on:click={() => {
        sortOption = "alpha";
        sortDirection =
          sortOption === "alpha"
            ? sortDirection === "asc"
              ? "desc"
              : "asc"
            : "asc";
      }}
    >
      Title {sortOption === "alpha"
        ? sortDirection === "asc"
          ? "↑"
          : "↓"
        : "⇅"}
    </button>

    <button
      class:active={sortOption === "date"}
      on:click={() => {
        sortOption = "date";
        sortDirection =
          sortOption === "date"
            ? sortDirection === "asc"
              ? "desc"
              : "asc"
            : "desc";
      }}
    >
      Date {sortOption === "date" ? (sortDirection === "asc" ? "↑" : "↓") : "⇅"}
    </button>

    <!-- Filters button stays inline -->
    <button on:click={() => (filterOpen = !filterOpen)}>
      Filters <span class:open={filterOpen}>▼</span>
    </button>
  </div>

  <!-- Filters panel appears below the toolbar -->
  {#if filterOpen}
    <div class="filters-panel" transition:slide={{ duration: 200 }}>
      <div class="filter-group">
        <strong>Type:</strong>
        <div class="options-group">
          {#each typeOptions as type}
            <label class="custom-checkbox">
              <input
                type="checkbox"
                checked={filterType.includes(type)}
                on:change={() => toggleType(type)}
              />
              <span class="checkmark"></span>
              {type}
            </label>
          {/each}
          <button class="clear-button" on:click={() => (filterType = [])}
            >clear</button
          >
        </div>
      </div>

      <div class="filter-group">
        <strong>Year:</strong>
        <div class="options-group">
          {#each yearOptions as year}
            <label class="custom-checkbox">
              <input
                type="checkbox"
                checked={filterYear.includes(year)}
                on:change={() => toggleYear(year)}
              />
              <span class="checkmark"></span>
              {year}
            </label>
          {/each}
          <button class="clear-button" on:click={() => (filterYear = [])}
            >clear</button
          >
        </div>
      </div>
    </div>
  {/if}
  <div class="toolbar-footer"></div>

  <!-- --- Projects Listing --- -->
  <div class="projects-container">
    {#each filtered as project}
      <svelte:component this={cardComponent} {...project} />
    {/each}
  </div>
</div>

<style>
  .project-browser-wrapper {
    background-color: rgba(0, 0, 0, 0.02);
    width: 100%;
    padding: 0rem;
    display: flex;
    flex-direction: column;
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    padding: 0.5rem 0.5rem 0;
    justify-content: space-between;
    border-radius: 0; /* match wrapper */
    background-color: rgba(0, 0, 0, 0.1);
  }

  .toolbar-footer {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    height: 0.5rem;
  }

  button {
    padding: 0.3rem 0.6rem;
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  .filters-panel {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 1rem 0.75rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .filter-group {
    display: flex;
    gap: 0.3rem;
    flex-direction: row;
    padding: 0 0.5rem;
  }
  .filter-group strong {
    margin-right: 0.5rem;
  }

  .options-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    align-items: center;
  }
  span {
    display: inline-block;
    transition: transform 0.2s ease;
  }

  span.open {
    transform: rotate(180deg);
  }

  .clear-button {
    background: none;
    border: none;
    padding: 0;
    margin-left: 0.3rem;
    color: #bdbdbd; /* optional: link color */
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.85rem; /* slightly smaller */
  }

  .clear-button:hover {
    filter: brightness(0.8);
  }

  .projects-container {
    max-height: 600px; /* adjust depending on your 4–5 project rows */
    overflow-y: auto;
    width: 98%;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;

    gap: 10px;
    display: grid;
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.02);
  }

  .projects-container::-webkit-scrollbar {
    width: 8px;
  }

  .projects-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  .custom-checkbox {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  /* Hide the default checkbox */
  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .custom-checkbox .checkmark {
    position: relative;
    display: inline-block;
    width: 12pt;
    height: 12pt;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid white;
    flex-shrink: 0;
    vertical-align: middle;
  }

  /* Checked state */
  .custom-checkbox input:checked + .checkmark {
    background-color: #ffffff;
  }

  /* Optional: add a checkmark inside */
  .custom-checkbox .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked + .checkmark::after {
    display: block;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid rgb(0, 0, 0);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>
