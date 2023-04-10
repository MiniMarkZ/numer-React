import { cramer } from "./calcramer";

test("testcal_cramer", () => {
  let cal = cramer([['4', '-4', '0'],['-1', '4', '2'],['0', '-2', '4']],[400,400,400]);
  expect(cal.re_results).toStrictEqual([175, 75, 137.5]);
});