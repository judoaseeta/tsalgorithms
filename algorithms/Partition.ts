import Less from './Less';
import Swap from './Swap';
export default function Partition<Item> (arr: Item[], low: number, high: number) {
    let i = low;
    let j = high + 1;
    let v : Item = arr[low];
    while(true) {
        while(Less(arr[++i], v)) if(i === high) break;
        while(Less(v, arr[--j])) if(j === low) break;
        if( i >= j ) break;
        Swap(arr, i, j);
    }
    Swap(arr, low, j);
    return j;
}