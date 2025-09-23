// @ts-nocheck

/**
 * Sort projects alphabetically by name
 * @param {Object} a
 * @param {Object} b
 * @param {"asc"|"desc"} direction
 */
export function sortAlpha(a, b, direction = "asc") {
  return direction === "asc"
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name);
}

/**
 * Sort projects by month+year (date property)
 * @param {Object} a
 * @param {Object} b
 * @param {"asc"|"desc"} direction
 */
export function sortByDate(a, b, direction = "desc") {
  const timeA = a.date.getTime();
  const timeB = b.date.getTime();
  return direction === "asc" ? timeA - timeB : timeB - timeA;
}