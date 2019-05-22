import Sort from './Sort';
import Merge from './Merge';


export default class MergeSort<Item> extends Sort<Item> {
    constructor(arr: Item[]) {
        super(arr);
    }
    showName() {
        return 'MergeSort'
    }
    mergeSort(arr: Item[], low: number, high: number) {
        if( high <= low) return;
        const mid = Math.floor(low + (high - low) /2);
        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);
        Merge(arr , low, mid, high);
    }
    sort() {
        this.mergeSort(this.array, 0, this.array.length -1);
        return this.array;
    }
}