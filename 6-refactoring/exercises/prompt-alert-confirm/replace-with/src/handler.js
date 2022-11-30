import { replaceWith } from './util.js';

export const replaceWithHandler = () => {
    const stringToReplacify = prompt('enter a string to replaceify');
  if (stringToReplacify === null) {
    alert('good bye');
    return;
  }

  const oldChar = prompt('enter a character to replace');
  if (oldChar === null) {
    alert('good bye');
    return;
  }
  if (oldChar.length !== 1) {
    alert(`"${oldChar}" is not a single character`);
    return;
  }

  const newChar = prompt(`enter a character to replace "${oldChar}"`);
  if (newChar === null) {
    alert('good bye');
    return;
  }
  if (newChar.length !== 1) {
    alert(`"${newChar}" is not a single character`);
    return;
  }

  
   //execute core logic
//    let newString = '';
//     for (const char of stringToReplacify) {
//       if (char === oldChar) {
//         newString += newChar;
//       } else {
//         newString += char;
//       }
//    }
 const newResult = replaceWith(stringToReplacify, newChar, oldChar);
 

  alert(`${stringToReplacify}\n${newString}`);

};
