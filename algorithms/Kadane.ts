const kadane = (numArr: number[]) => {
    let maxSofar = numArr[0];
    let maxEnd = numArr[0];
    for(let i = 0; i < numArr.length; i++) {
        maxSofar = Math.max(numArr[i], maxSofar + numArr[i]);
        maxEnd = Math.max(maxEnd, maxSofar);
    }
    return maxEnd;
};
console.log(kadane([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));
