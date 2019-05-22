function swap <Item> (arr: Item[], id1: number, id2: number) {
    [arr[id1],  arr[id2]] = [arr[id2], arr[id1]];
};

export default swap;