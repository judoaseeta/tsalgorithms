import Swap from './Swap';
import Less from './Less';


export default abstract class Sort<Item> {
    protected array: Item[] = null;
    constructor(arr: Item[]) {
        this.array = arr;
    }
    sort(low?:number,high?: number) {

    }
    less(a: Item, b: Item) {
        return Less(a, b);
    }
    show()  {
        for(let i = 0; i < this.array.length; i++) {
            console.log(`array[${i}]: ${this.array[i]}`);
        }
    }
    swap(array: Item[], a: number, b: number) {
        Swap(array, a, b);
    }
    private checkSorted(array: Item[]) {
        for(let i = 1; i < array.length; i++) {
            if(this.less(array[i] , array[i - 1])) {

                return false;
            }
        }
        return true;
    }
    abstract showName(): string;
    isSorted() {
        return this.checkSorted(this.array);
    }
}


