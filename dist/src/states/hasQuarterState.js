export class HasQuarterState {
    gumballMachine;
    constructor(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You can't insert another quarter");
    }
    ejectQuarter() {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
    turnCrank() {
        let randomNumber = Math.ceil(Math.random() * 10);
        console.log("You turned...");
        if (randomNumber === 10 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }
    dispense() {
        console.log("No gumball dispensed");
    }
    refill() { }
}
