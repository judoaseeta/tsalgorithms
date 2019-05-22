import LLNode from './Node';
export default class Queue <Item>{
    private first: LLNode<Item> = null;
    private last: LLNode<Item> = null;
    private size: number = 0;
    public isEmpty() {
        return this.first === null;
    }
    public enqueue(nextItem :Item) {
        const oldLast = this.last;
        this.last = new LLNode(nextItem);
        if(this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLast.setNext(this.last);
        }
        this.size++;
    }
    public dequeue() {
        const oldFirst = this.first;
        this.first = this.first.next;
        if(this.isEmpty()) this.last = null;
        this.size--;
        return oldFirst;
    }
}
const q = new Queue();
q.enqueue(0);
q.enqueue(1);
console.log(q);
q.dequeue();
console.log(q);q.dequeue();
console.log(q);