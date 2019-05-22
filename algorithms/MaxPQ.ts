import Less from './Less';
import Swap from './Swap';

export default class MaxPQ<Item> {
    private PQ: Item[] = [];
    private N: number = 0;
    private less (i: number, j: number): boolean {
        return Less(this.PQ[i],this.PQ[j]);
    }
    private swap(i: number, j: number): void {
        Swap(this.PQ, i, j);
    }
    private swim(key: number): void {
        let k = key;
        while (k > 1 && this.less(Math.floor(k / 2), k)) {
            this.swap(Math.floor(k/2),k);
            k = Math.floor(k/2);
        }
    }
    private sink(key: number): void {
        let k = key;
        while( Math.floor(2 * k) < this.N) {
            let j = Math.floor(2 * k);
            if (j < this.N && this.less(j, j +1)) j++;
            this.swap(k, j);
            k = j;
        }
    }
    public isEmpty(): boolean {
        return this.N === 0;
    }
    public size() : number {
        return this.N;
    }
    public insert(v: Item) : void {
        this.PQ[++this.N] = v;
        this.swim(this.N);
    }
    public delMax() {
        let max = this.PQ[1];
        this.swap(1, this.N--);
        this.PQ[this.N + 1] = null;
        this.sink(1);
        return max;
    }
}