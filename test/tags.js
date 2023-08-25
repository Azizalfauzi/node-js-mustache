import Mustache from "mustache";

test("Test Tags", () => {
  const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
    name: "Aziz",
    hobby: "<b>Programming</b>",
  });
  expect(data).toBe("Hello Aziz, my hobby is <b>Programming</b>");
});
