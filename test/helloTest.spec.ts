import { assert } from "chai";

let hello = (arg: string) => {
    return 'Hello' + ' ' + arg
}

describe("Typescript + Babel usage suite", () => {
  it("should return string correctly", () => {
    assert.equal(hello("mocha"), "Hello mocha");
  });
}); 