/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
    const tableEl = document.createElement('table');
    for (const array of arrayOfArrays) {
        const trEl = document.createElement('tr');
        for (const text of array) {
            const tdEl = document.createElement('td');
            tdEl.innerText = text;
            trEl.appendChild(tdEl);
        }
        tableEl.appendChild(trEl);
    }
   return tableEl;
};
