import Partition from './Partition';
import Sort from './Sort';

export default class QuickSort<Item> extends Sort<Item> {
    constructor(arr: Item[]) {
        super(arr);
    }
    quickSort(arr: Item[], low: number, high: number) {
        if(high <= low) return;
        const j = Partition(arr, low, high);
        this.quickSort(arr, low, j -1);
        this.quickSort(arr, j + 1, high);
    }
    sort() {
        this.quickSort(this.array, 0, this.array.length - 1);
        return this.array;
    }
    showName() {
        return 'QuickSort'
    }
}
