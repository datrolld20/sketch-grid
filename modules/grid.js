import {resetToMax, size, mode} from './controls.js'

let gridContainer = document.querySelector('#grid-container');

function createGrid() {
    clearGrid();

    if(size > 250) {
        resetToMax();
    }
    gridContainer.style['grid-template-columns'] = `repeat(${size}, 1fr)`;
    gridContainer.style['grid-template-rows'] = `repeat(${size}, 1fr)`;

    for(let i = 1; i <= (size * size); i++) {
        let element = document.createElement('div');
        element.setAttribute('class', 'grid-square');
        element.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(element);
    }
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function changeColor(e) {
    let element = e.target;
    let bgColor = '';
    switch(mode) {
        case 'black':
            bgColor = 'black';
            break;
        
        case 'random':
            for(let i = 1; i <=6; i++) {
                
            }
    }
    element.style['background'] = 'black';
}

export {gridContainer, createGrid, changeColor, clearGrid};