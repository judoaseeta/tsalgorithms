import Sort from './Sort';
import randArr from './randArr';
export default class InsertionSort<Item> extends Sort<Item> {
    constructor(arr: Item[]) {
        super(arr);
    }
    insertionSort(arr: Item[]) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i; j > 0 && this.less(arr[j], arr[j -1]); j--) this.swap(arr, j, j -1 );
        }
    }
    sort() {
        this.insertionSort(this.array);
        return this.array;
    }
    showName() {
        return 'InsertionSort'
    }
}