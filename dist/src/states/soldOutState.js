export class SoldOutState {
    gumballMachine;
    constructor(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You can't isnert a quarter, the machine is sold out");
    }
    ejectQuarter() {
        console.log("You can't eject a quarter, you haven't inserted a quarter yet");
    }
    turnCrank() {
        console.log("You turned, but there are no gumballs");
    }
    dispense() {
        console.log("No gumball dispensed");
    }
    refill() {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
}
