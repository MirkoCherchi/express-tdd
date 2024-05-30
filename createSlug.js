const createSlug = (title, posts) => {
  const baseSlug = title.replaceAll(" ", "-").toLowerCase().replaceAll("/", "");
  const slugs = posts.map((p) => p.slug);
  let counter = 1;
  let slug = baseSlug;
  while (slugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

module.exports = createSlug;
