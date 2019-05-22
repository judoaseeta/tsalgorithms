import BS from '../algorithms/BS';

export function ThreeSumCount (a: number[]) {
    const array = a.sort();
    let cnt: number = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; i < array.length; i++) {
            const find = BS(array, -(array[i] + array[j]));
            console.log(i,j,find,array[i], array[j], array[find]);
            if(find> j) {
                cnt++;
            }
        }
    }
    return cnt;
}
