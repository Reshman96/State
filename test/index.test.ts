import { describe, expect, test } from "vitest";
import { GumballMachine } from "../src/gumballMachine/gumballMachine";

describe("Loading gumball machine", () => {
  let gumballMachine: GumballMachine = new GumballMachine(20);

  gumballMachine.insertQuarter();

  test("should return something state", () => {
    console.log(gumballMachine.getState());
    expect(gumballMachine.getState()).toBe(gumballMachine.hasQuarterState);
  });

  gumballMachine.turnCrank();

  test("should return something state", () => {
    console.log(gumballMachine.getState());
    expect(gumballMachine.getState()).toBe(gumballMachine.soldState);
  });
});
