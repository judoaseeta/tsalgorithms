import randArr from './randArr';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
export default class StopWatch {
    private start: number = 0;
    constructor() {
        this.start = new Date().getTime();
    }
    elapsedTime() {
        const now = new Date().getTime();
        return (now - this.start);
    }
}
/*
const arr = randArr(100000);
const watch = new StopWatch();
console.log(new SelectionSort(arr).sort());
console.log(watch.elapsedTime());
*/