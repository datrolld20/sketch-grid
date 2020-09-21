import {createGrid} from './grid.js'

let sizeInput = document.querySelector('#size-input');
let sizeDupe = document.querySelector('#size-dupe');
let modeSelect = document.querySelector('#mode-select')
let goBtn = document.querySelector('#go-btn');
let size;
let mode;

// Event listeners for controls
sizeInput.addEventListener('input', updateSize);
modeSelect.addEventListener('change', updateMode);
goBtn.addEventListener('click', updateMode);
goBtn.addEventListener('click', createGrid);

function updateSize() {
    size = sizeInput.value;

    if(size !== '') {
        sizeDupe.textContent = ` x ${size}`;
    }
    else {
        sizeDupe.textContent = ``;
    }
}

function resetToMax() {
    sizeInput.value = 250;
    updateSize();
}

function updateMode() {
    mode = modeSelect.value;
}


sizeInput.value=16;
modeSelect.value='black';
updateSize();
updateMode();
createGrid();

export {size, mode, resetToMax}