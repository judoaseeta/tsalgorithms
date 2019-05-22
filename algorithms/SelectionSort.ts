import Sort from "./Sort";
import randArr from "./randArr";

export default class SelectionSort<Item> extends Sort<Item> {
    constructor(array: Item[]) {
        super(array);
    }
    selectionSort(arr: Item[]) {
        const n = arr.length;
        for(let i = 0; i < n; i++ ) {
            let min = i;
            for (let j = i + 1; j <n ; j++) {
                if(this.less(arr[j], arr[min])) min = j;
            }
            this.swap(arr, i, min);
        }
    }
    sort() {
        this.selectionSort(this.array);
        return this.array;
    }
    showName() {
        return 'SelectionSort'
    }
}
