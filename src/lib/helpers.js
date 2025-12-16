export function formatDate(date, options = {}) {
  if (!date) return "";

  // Allow strings or Date objects
  const d = date instanceof Date ? date : new Date(date);

  return d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    ...options
  });
}