import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = event => {
   const input = event.target.value;

   const reversedUppercase = reverseAndUpper(input);

   document.getElementById('output').innerHTML = reversedUppercase;
};
