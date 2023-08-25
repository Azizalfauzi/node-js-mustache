import Mustache from "mustache";

test("Testing mustache nested object", () => {
  const data = Mustache.render(`Hello {{person.name}}`, {
    person: {
      name: "Aziz",
    },
  });
  expect(data).toBe("Hello Aziz");
});
