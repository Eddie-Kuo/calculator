// import needed modules

import { add } from './utils';

// define and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent = add(num1, num2);
    
});


// event handlers - what needs to happen?
    // logic and calculations
    // update UI

    //addButton.addEventListener(<name of event, <function to run>)

