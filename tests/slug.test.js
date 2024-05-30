const { test, expect } = require("@jest/globals");
const posts = require("../db/posts.json");
const createSlug = require("../createSlug");

test("createSlug dovrebbe ritornare una stringa", () => {
  expect(typeof createSlug("Nuovo Post", posts)).toBe("string");
});
