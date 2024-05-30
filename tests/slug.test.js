const { test, expect } = require("@jest/globals");
const posts = require("../db/posts.json");
const createSlug = require("../createSlug");

//1
test("createSlug dovrebbe ritornare una stringa", () => {
  expect(typeof createSlug("Nuovo Post", posts)).toBe("string");
});

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
  const slug = createSlug("Nuovo Post", posts);
  expect(slug.toLowerCase()).toBe(slug);
});

test("createSlug dovrebbe sostituire gli spazi con -", () => {
  const slug = createSlug("Nuovo Post", posts);
  expect(slug).not.toContain(" ");
});

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
  const existingSlug = "nuovo-post";
  const posts = [
    { title: "Post Vecchio", slug: "post-vecchio" },
    { title: "Nuovo Post", slug: existingSlug },
  ];

  const newSlug = createSlug("Nuovo Post", posts);
  expect(newSlug).toBe("nuovo-post-1");
});

test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
  const posts = [
    { title: "Post Vecchio", slug: "post-vecchio" },
    { title: "Nuovo Post", slug: "nuovo-post" },
  ];

  expect(() => createSlug("", posts)).toThrow(
    "Il titolo deve essere una stringa non vuota"
  );
  expect(() => createSlug("   ", posts)).toThrow(
    "Il titolo deve essere una stringa non vuota"
  );
  expect(() => createSlug(123, posts)).toThrow(
    "Il titolo deve essere una stringa non vuota"
  );
  expect(() => createSlug(null, posts)).toThrow(
    "Il titolo deve essere una stringa non vuota"
  );
  expect(() => createSlug(undefined, posts)).toThrow(
    "Il titolo deve essere una stringa non vuota"
  );
});

test("createSlug dovrebbe lanciare un errore se manca l'array dei post", () => {
  expect(() => createSlug("Nuovo Post", [])).toThrow(
    "L'array dei post è mancante o vuoto"
  );
  expect(() => createSlug("Nuovo Post", null)).toThrow(
    "L'array dei post è mancante o vuoto"
  );
  expect(() => createSlug("Nuovo Post", undefined)).toThrow(
    "L'array dei post è mancante o vuoto"
  );
  expect(() => createSlug("Nuovo Post", {})).toThrow(
    "L'array dei post è mancante o vuoto"
  );
  expect(() => createSlug("Nuovo Post")).toThrow(
    "L'array dei post è mancante o vuoto"
  );
});
