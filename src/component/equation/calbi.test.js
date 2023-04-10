import { Calbisection } from "./calbi";

test("testcal_bi", () => {
  let cal = Calbisection(1.5, 2, "x^4-13", "x");
  expect(cal.New_N).toBe(1.8988288640975952);
});