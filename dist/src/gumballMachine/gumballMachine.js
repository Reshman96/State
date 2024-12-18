import { SoldOutState } from "../states/soldOutState";
import { NoQuarterState } from "../states/noQuarterState";
import { HasQuarterState } from "../states/hasQuarterState";
import { SoldState } from "../states/soldState";
import { WinnerState } from "../states/winnerState";
export class GumballMachine {
    soldOutState;
    noQuarterState;
    hasQuarterState;
    soldState;
    winnerState;
    state;
    count = 0;
    constructor(numberGumballs) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        }
        else {
            this.state = this.soldOutState;
        }
    }
    insertQuarter() {
        this.state.insertQuarter();
    }
    ejectQuarter() {
        this.state.ejectQuarter();
    }
    turnCrank() {
        this.state.turnCrank();
        this.state.dispense();
    }
    setState(state) {
        this.state = state;
    }
    releaseBall() {
        console.log("A gumball comews rolling out the slot...");
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }
    refill(count) {
        this.count += count;
        console.log("The gumball machine was just refilled; it's new count is: " + this.count);
        this.state.refill();
    }
    getSoldOutState() {
        return this.soldOutState;
    }
    getNoQuarterState() {
        return this.noQuarterState;
    }
    getHasQuarterState() {
        return this.hasQuarterState;
    }
    getWinnerState() {
        return this.winnerState;
    }
    getSoldState() {
        return this.soldState;
    }
    getCount() {
        return this.count;
    }
    getState() {
        return this.state;
    }
}
