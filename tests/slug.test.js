const { test, expect } = require("@jest/globals");
const posts = require("../db/posts.json");
const createSlug = require("../createSlug");

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
  console.log(newSlug);

  expect(newSlug).toBe("nuovo-post-1");
});
