const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", mass: 1.008, col: 1, row: 1, category: "nonmental" },
    { number: 2, symbol: "He", name: "Helium", mass: 4.0026, col: 18, row: 1, category: "noble" },
    { number: 3, symbol: "Li", name: "Lithium", mass: 6.94, col: 1, row: 2, category: "alkali" },
    { number: 4, symbol: "Be", name: "Beryllium", mass: 9.0122, col: 2, row: 2, category: "alkaline" },
    { number: 5, symbol: "B", name: "Boron", mass: 10.81, col: 13, row: 2, category: "metalloid" },
    { number: 6, symbol: "C", name: "Carbon", mass: 12.011, col: 14, row: 2, category: "nonmetal" },
    { number: 7, symbol: "N", name: "Nitrogen", mass: 14.007, col: 15, row: 2, category: "nonmetal" },
    { number: 8, symbol: "O", name: "Oxygen", mass: 15.999, col: 16, row: 2, category: "nonmetal"},
    { number: 9, symbol: "F", name: "Fluorine", mass: 18.998, col: 17, row: 2, category: "halogen"},
    { number: 10, symbol: "Ne", name: "Neon", mass: 20.180, col: 18, row:2, category: "nobel" },

];

const tableContainer = document.getElementById('periodic-table');
const modal = document.getElementById('element-modal');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

function createTable() {
    elements.forEach(el => {
        const div = document.createElement('div');
        div.classList.add('element');
        
        if(el.category) div.classList.add(el.category);

        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;

        div.innerHTML = `
            <span class="number">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="mass">${Math.floor(el.mass)}</span>
        `;

        div.addEventListener('click', () => showDetails(el));

        tableContainer.appendChild(div);
    });
}

function showDetails(el) {
    modalName.innerText = `${el.name} (${el.symbol})`;
    modalDesc.innerText = `Atomic Number: ${el.number}\nAtomic Mass: ${el.mass}\nCategory: ${el.category}`;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
}

closeBtn.onclick = () => {
    modal.classList.add('hidden');
    modal.style.display = 'none';
};

createTable();