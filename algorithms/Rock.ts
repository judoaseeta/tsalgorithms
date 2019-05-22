const isCurrentBigger = (psum: number, currentValue: number,i: number) => ((psum - currentValue) / i ) < (psum / i + 1);
const concert = (prices: number[], teamNumber: number) => {
    let j = 0;
    let psum = 0;
    let finalSum = Infinity;
    for( let i = 0; i < prices.length; i++) {
        psum = psum + prices[i];
        if(i - j >= teamNumber){
            console.log(i, j ,psum);
            if(isCurrentBigger(psum ,prices[i], i)) {
                psum = 0;
                j = i + 1;
            }
            finalSum = Math.min(psum / i + 1, finalSum);
            console.log(finalSum);
        }

    }
    return finalSum;
};
const ticketPrices = [3,6,1,2,4];
console.log(concert(ticketPrices, 3));
