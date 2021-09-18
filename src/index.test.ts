import * as I from "./index";

test("get IP from hostname", async () => {
  expect(await I.getIPFromHostName("example.org")).toEqual({
    address: "93.184.216.34",
    family: 4,
  });
});
