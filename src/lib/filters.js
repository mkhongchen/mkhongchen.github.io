// @ts-nocheck

/**
 * Filter projects by type
 * @param {Array} projects
 * @param {string} type - "all" or a specific type
 */
export function filterByType(projects, types) {
  if (!types || types.length === 0) return projects;
  return projects.filter((p) => types.includes(p.type.name));
}

/**
 * Filter projects by year
 * @param {Array} projects
 * @param {number|string} year - "all" or a numeric year
 */
export function filterByYear(projects, years) {
  if (!years || years.length === 0) return projects;
  return projects.filter((p) => years.includes(p.date.getFullYear()));
}

/**
 * Generate a sorted list of unique years from projects
 * @param {Array} projects
 * @param {string} direction "asc" or "desc"
 */
export function getYears(projects, direction = "desc") {
  const years = [...new Set(projects.map(p => p.date.getFullYear()))];
  return direction === "asc" ? years.sort((a, b) => a - b) : years.sort((a, b) => b - a);
}
