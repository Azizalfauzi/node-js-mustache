import Mustache from "mustache";

test("Testing mustache", () => {
  const data = Mustache.render(`Hello {{name}}`, { name: "Aziz" });
  expect(data).toBe("Hello Aziz");
});

test("Testing mustache", () => {
  Mustache.parse("Hello {{name}}");
  const data = Mustache.render(`Hello {{name}}`, { name: "Aziz" });
  expect(data).toBe("Hello Aziz");
});
