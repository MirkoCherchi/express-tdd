function createSlug(title, posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("L'array dei post è mancante o vuoto");
  }

  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("Il titolo deve essere una stringa non vuota");
  }

  let slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  let existingSlugs = posts.map((post) => post.slug);
  let newSlug = slug;
  let counter = 1;

  while (existingSlugs.includes(newSlug)) {
    newSlug = `${slug}-${counter}`;
    counter++;
  }

  return newSlug;
}

module.exports = createSlug;
