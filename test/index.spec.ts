import { expect, test } from "@jest/globals";
import { rpn } from "../src";

test("3 4 +", () => {
  expect(rpn("3 4 +")).toBe(7);
});
test("5 1 2 + 4 * + 3 -", () => {
  expect(rpn("5 1 2 + 4 * + 3 -")).toBe(14);
});
test("6 7 *", () => {
  expect(rpn("6 7 *")).toBe(42);
});
test("8 2 /", () => {
  expect(rpn("8 2 /")).toBe(4);
});
