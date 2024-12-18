import { GumballMachine } from "../gumballMachine/gumballMachine";

export class SoldOutState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You can't isnert a quarter, the machine is sold out");
  }

  ejectQuarter(): void {
    console.log("You can't eject a quarter, you haven't inserted a quarter yet");
  }

  turnCrank(): void {
    console.log("You turned, but there are no gumballs");
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  refill(): void {
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
}
