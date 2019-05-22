import Less from "./Less";

export default function merge<Item>(a : Item[], low: number, mid: number, high:number) {
    let i = low;
    let j = mid + 1;
    let aux: Item[] = [];
    for(let k = low; k<= high; k++) {
        aux[k] = a[k];
    }
    for(let k = low; k <= high; k++) {
        if(i > mid) a[k] = aux[j++];
        else if (j > high) a[k] = aux[i++];
        else if(Less(aux[j],aux[i])) a[k]  = aux[j++];
        else a[k] = aux[i++];
    }
}