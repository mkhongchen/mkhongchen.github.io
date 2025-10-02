<script>
  import { slide } from "svelte/transition";
  import { filterByType, filterByYear, getYears } from "../lib/filters.js";
  import { sortAlpha, sortByDate } from "../lib/sorters.js";

  export let projectsList = [];
  export let cardComponent;

  // --- state ---
  let sortOption = "default";
  let sortDirection = "desc";
  let filterOpen = false;
  let filterType = [];
  let filterYear = [];

  const toggle = (arr, value) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  const toggleType = (type) => (filterType = toggle(filterType, type));
  const toggleYear = (year) => (filterYear = toggle(filterYear, year));

  const typeOptions = [...new Set(projectsList.map((p) => p.type.name))];
  const yearOptions = getYears(projectsList, "desc");

  $: filtered = [
    ...filterByYear(filterByType(projectsList, filterType), filterYear),
  ].sort((a, b) => {
    // @ts-ignore
    if (sortOption === "alpha") return sortAlpha(a, b, sortDirection);
    // @ts-ignore
    if (sortOption === "date") return sortByDate(a, b, sortDirection);
    return 0;
  });

  const setSort = (option) => {
    if (sortOption === option)
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    else {
      sortOption = option;
      sortDirection = option === "alpha" ? "asc" : "desc";
    }
  };

  const sortButtons = [
    { key: "default", label: "Default" },
    { key: "alpha", label: "Title" },
    { key: "date", label: "Date" },
  ];
</script>

<div class="project-browser-wrapper">
  <div class="toolbar">
    {#each sortButtons as btn}
      <button
        class:active={sortOption === btn.key}
        on:click={() => setSort(btn.key)}
      >
        {btn.label}
        {#if btn.key !== "default"}
          {sortOption === btn.key ? (sortDirection === "asc" ? "↑" : "↓") : "⇅"}
        {/if}
      </button>
    {/each}
    <button on:click={() => (filterOpen = !filterOpen)}>
      Filters <span class:open={filterOpen}>▼</span>
    </button>
  </div>

  {#if filterOpen}
    <div class="filters-panel" transition:slide={{ duration: 200 }}>
      {#each [{ label: "Type", options: typeOptions, toggleFn: toggleType, state: filterType }, { label: "Year", options: yearOptions, toggleFn: toggleYear, state: filterYear }] as group}
        <div class="filter-group">
          <strong>{group.label}:</strong>
          <div class="options-group">
            {#each group.options as opt}
              <label class="custom-checkbox">
                <input
                  type="checkbox"
                  checked={group.state.includes(opt)}
                  on:change={() => group.toggleFn(opt)}
                />
                <span class="checkmark"></span>{opt}
              </label>
            {/each}
            <button class="clear-button" on:click={() => (group.state = [])}
              >clear</button
            >
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="projects-container">
    {#each filtered as project}
      <svelte:component this={cardComponent} {...project} />
    {/each}
  </div>
</div>

<style>
  .project-browser-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    background: rgba(0, 0, 0, 0.02);
    box-sizing: border-box;
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
  }

  button {
    padding: 0.3rem 0.6rem;
    border-radius: 0.25rem;
    background: transparent;
    cursor: pointer;
  }

  button.active {
    font-weight: bold;
  }

  .filters-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.75rem;
    background: rgba(0, 0, 0, 0.1);
  }

  .filter-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 2rem;
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

  .custom-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    user-select: none;
  }
  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .checkmark {
    position: relative;
    display: inline-block;
    width: 12pt;
    height: 12pt;
    border: 2px solid white;
  }
  .custom-checkbox input:checked + .checkmark {
    background: #fff;
  }
  .checkmark::after {
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
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .clear-button {
    background: none;
    border: none;
    padding: 0;
    margin-left: 0.3rem;
    font-size: 0.85rem;
    color: #bdbdbd;
    text-decoration: underline;
    cursor: pointer;
  }
  .clear-button:hover {
    filter: brightness(0.8);
  }

  .projects-container {
    display: grid;
    gap: 0.5rem;
    padding: 0.25rem;
    max-height: 60vh;
    overflow-y: auto;
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.02);
  }

  span {
    display: inline-block;
    transition: transform 0.2s;
  }
  span.open {
    transform: rotate(180deg);
  }
</style>
