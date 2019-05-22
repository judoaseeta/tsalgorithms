export default class LLNode<Item> {
    item: Item = null;
    next: LLNode<Item> = null;
    constructor(item: Item) {
        this.item = item;
    }
    public setNext(nextItem: LLNode<Item>) {
        this.next = nextItem;
    }
    public hasNext() {
        return this.next !== null;
    }
    public print() {
        console.log(`currentItem:${this.item}, nextItem: ${this.next.item}`);
    }
}
