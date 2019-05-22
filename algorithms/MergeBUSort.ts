import Sort from './Sort';
import Merge from './Merge';
import randArr from './randArr';
export default class MergeBUSort<Item> extends Sort<Item> {
    constructor(arr: Item[]) {
        super(arr);
    }
    showName() {
        return 'MergeSort - Bottom Up'
    }
    mergeBUSort(arr: Item[]) {
        const leng = arr.length;
        for(let sz = 1; sz < leng; sz = sz + sz) {
            for(let i = 0; i < leng -sz; i += sz +sz ) {
                Merge(arr,i, i + sz -1, Math.min(i + sz + sz -1, leng -1));
            }
        }
    }
    sort() {
        this.mergeBUSort(this.array);
        return this.array;
    }
};