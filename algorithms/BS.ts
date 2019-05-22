export default function binarySearch(arr: number[], key: number, low = 0, high = arr.length - 1) {
    const mid = Math.floor(low + (high - low) / 2);
    if(low > high) {
        return  -1;
    }
    if(key === arr[mid]) return mid;
    return key > arr[mid] ? binarySearch(arr, key, mid +1, high) : binarySearch(arr, key, low, mid - 1);
}
const a = [1,2,3,4,4,4,4,4,4,4,4,4,5,6,8,9];
const result = binarySearch(a, 5);