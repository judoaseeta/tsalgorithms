import LLNode from './Node';

export default class Stack<Item> {
    private first: LLNode<Item> = null;
    private size: number = 0;
    public push(firstItem: Item) {
        if(!this.first) {
            this.first = new LLNode<Item>(firstItem);
            this.size++;
        }
        else {
            const oldFirst = this.first;
            this.first = new LLNode<Item>(firstItem);
            this.first.setNext(oldFirst);
            this.size++;
        }
    }
    public pop() {
        if(!this.first) return -1;
        const poppedFirst = this.first;
        if(this.first.hasNext()) {
            this.first = poppedFirst.next;
            this.size--;
            return poppedFirst;
        } else {
            this.first = null;
            this.size--;
            return poppedFirst;
        }
    }
    public length() {
        return this.size;
    }
    public isEmpty() {
        return this.first === null;
    };
};