const randArr = (size: number, allowNeg?: boolean) => {
    const nums: number[] = [];
    for(let i = 0 ; i < size; i++) {
        if(allowNeg) {

        }
        nums.push(Math.floor((Math.random() * size) ));
    }
    return nums;
};

export default randArr;