import { checkForName } from "../src/client/js/nameChecker"
test('Valid URL', () => {
    expect(checkForName("jhdhsjdhj")).toBe(false);
  });