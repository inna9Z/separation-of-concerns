import { capSwap } from './util.js';

export const capSwapHandler = () => {
    let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to cap-swap');
  }

  // execute core logic
  //  const capSwapped = userInput
  //    .split('')
  //    .map((str) => {
  //      const charCode = str.charCodeAt(0);
  //      if (64 < charCode && charCode < 91) {
  //        return String.fromCharCode(charCode + 32);
  //      } else if (96 < charCode && charCode < 123) {
  //        return String.fromCharCode(charCode - 32);
  //      } else {
  //        return str;
  //      }
  //    })
  //    .join('');
    

   const newValue = capSwap(capSwapHandler);

  // communicate result to user
  alert(capSwapped);
};
