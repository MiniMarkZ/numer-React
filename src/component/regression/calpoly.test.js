import { calculatePolynomial } from "./calpoly";

test("testcal_calpoly", () => {
  let cal = calculatePolynomial(2,9,65,[[10,5],[15,9],[20,15],[30,18],[40,22],[50,30],[60,35],[70,38],[80,43]]);
  expect(cal.re_result).toBe(36.239999999999995);
});