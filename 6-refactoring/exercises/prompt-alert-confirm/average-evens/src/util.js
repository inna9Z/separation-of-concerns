/**
 *
 */
export const averageEvens = (allNumbers) => {
    let howManyEvens = 0;
    let sumOfEvens = 0;
    for (const num of allNumbers) {
        if (num % 2 === 0) {
            sumOfEvens = sumOfEvens + num;
            howManyEvens = howManyEvens + 1;
        }
    }
   return howManyEvens === 0 ? 0 : sumOfEvens / howManyEvens;
};
