export class SoldState {
    gumballMachine;
    constructor(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("Please wait, we're already giving you a gumball");
    }
    ejectQuarter() {
        console.log("Sorry, you already turned the crank");
    }
    turnCrank() {
        console.log("Turning twice doesn't get you another gumball");
    }
    dispense() {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
        else {
            console.log("Oops, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }
    refill() { }
}
