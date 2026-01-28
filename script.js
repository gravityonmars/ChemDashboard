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
    { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", col: 1, row:3, category: "alkali" },
    { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", col: 2, row:3, category: "alkaline" },
    { number: 13, symbol: "Al", name: "Aluminium", mass: "26.982", col: 13, row: 3, category: "post-transition" },
    { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", col: 14, row: 3, category: "matelloid" },
    { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", col: 15, row: 3, category: "nonmetal" },
    { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", col: 16, row: 3, category: "nonmetal" },
    { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", col: 17, row: 3, category: "halogen" },
    { number: 18, symbol: "Ar", name: "Argon", mass: "39.948", col: 18, row: 3, category: "noble" },
    { number: 19, symbol: "K", name: "Potassium", mass: "39.098", col: 1, row: 4, category: "alkali" },
    { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", col: 2, row: 4, category: "alkaline" },
    { number: 21, symbol: "Sc", name: "Scandium", mass: "44.956", col: 3, row: 4, category: "transition" },
    { number: 22, symbol: "Ti", name: "Titanium", mass: "47.867", col: 4, row: 4, category: "transition" },
    { number: 23, symbol: "V", name: "Vanadium", mass: "50.942", col: 5, row: 4, category: "transition" },
    { number: 24, symbol: "Cr", name: "Chromium", mass: "51.996", col: 6, row: 4, category: "transition" },
    { number: 25, symbol: "Mn", name: "Manganese", mass: "54.938", col: 7, row: 4, category: "transition" },
    { number: 26, symbol: "Fe", name: "Iron", mass: "55.845", col: 8, row: 4, category: "transition" },
    { number: 27, symbol: "Co", name: "Cobalt", mass: "58.933", col: 9, row: 4, category: "transition" },
    { number: 28, symbol: "Ni", name: "Nickel", mass: "58.693", col: 10, row: 4, category: "transition" },
    { number: 29, symbol: "Cu", name: "Copper", mass: "63.546", col: 11, row: 4, category: "transition" },
    { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", col: 12, row: 4, category: "transition" },
    { number: 31, symbol: "Ga", name: "Gallium", mass: "69.723", col: 13, row: 4, category: "post-transition" },
    { number: 32, symbol: "Ge", name: "Germanium", mass: "72.630", col: 14, row: 4, category: "metalloid" },
    { number: 33, symbol: "As", name: "Arsenic", mass: "74.922", col: 15, row: 4, category: "metalloid" },
    { number: 34, symbol: "Se", name: "Selenium", mass: "78.971", col: 16, row: 4, category: "nonmetal" },
    { number: 35, symbol: "Br", name: "Bromine", mass: "79.904", col: 17, row: 4, category: "halogen" },
    { number: 36, symbol: "Kr", name: "Krypton", mass: "83.798", col: 18, row: 4, category: "noble" },
    { number: 37, symbol: "Rb", name: "Rubidium", mass: "85.467", col: 1, row: 5, category: "alkali" },
    { number: 38, symbol: "Sr", name: "Strontium", mass: "87.62", col: 2, row: 5, category: "alkaline" },
    { number: 39, symbol: "Y", name: "Yttrium", mass: "88.906", col: 3, row: 5, category: "transition" },
    { number: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", col: 4, row: 5, category: "transition" },
    { number: 41, symbol: "Nb", name: "Niobium", mass: "92.906", col: 5, row: 5, category: "transition" },
    { number: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", col: 6, row: 5, category: "transition" },
    { number: 43, symbol: "Tc", name: "Technetium", mass: "98", col: 7, row: 5, category: "transition" },
    { number: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", col: 8, row: 5, cateogory: "transition" },
    { number: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", col: 9, row: 5, cateogory: "transition" },
    { number: 46, symbol: "Pd", name: "Palladium", mass: "106.42", col: 10, row: 5, category: "transition" },
    { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", col: 11, row: 5, category: "transition" },
    { number: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", col: 12, row: 5, category: "transition"},
    { number: 49, symbol: "In", name: "Indium", mass: "114.82", col: 13, row: 5, category: "post-transition" },
    { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", col: 14, row: 5, category: "post-transition" },
    { number: 51, symbol: "Sb", name: "Antimony", mass: "121.76", col: 15, row: 5, category: "matalloid" },
    { number: 52, symbol: "Te", name: "Tellurium", mass: "127.60", col: 16, row: 5, category: "matelloid" },
    { number: 53, symbol: "I", name: "Iodine", mass: "126.90", col: 17, row: 5, category: "halogen" },
    { number: 54, symbol: "Xe", name: "Xenon", mass: "131.29", col: 18, row: 5, category: "noble" },
    { number: 55, symbol: "Cs", name: "Cesium", mass: "132.91", col: 1, row: 6, category: "alkali" },
    { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", col: 2, row: 6, category: "alkaline" },
    { number: 57, symbol: "La", name: "Lanthanum", mass: "138.91", col: 4, row: 9, category: "lanthanide" },
    { number: 58, symbol: "Ce", name: "Cerium", mass: "140.12", col: 5, row: 9, category: "lanthanide" },
    { number: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", col: 6, row: 9, category: "lanthanide"},
    { number: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", col: 7, row: 9, category: "lanthanide" },
    { number: 61, symbol: "Pm", name: "Promethium", mass: "145", col: 8, row: 9, category: "lanthanide" },
    { number: 62, symbol: "Sm", name: "Samarium", mass: "150.36", col: 9, row: 9, category: "lanthanide" },
    { number: 63, symbol: "Eu", name: "Europium", mass: "151.96", col: 10, row: 9, category: "lanthanide" },
    { number: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", col: 11, row: 9, category: "lanthanide" },
    { number: 65, symbol: "Tb", name: "Terbium", mass: "158.93", col: 12, row: 9, category: "lanthanide" },
    { number: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", col: 13, row: 9, category: "lanthanide" },
    { number: 67, symbol: "Ho", name: "Holmium", mass: "164.93", col: 14, row: 9, category: "lanthanide" },
    { number: 68, symbol: "Er", name: "Erbium", mass: "167.26", col: 15, row: 9, category: "lanthanide" },
    { number: 69, symbol: "Tm", name: "Thulium", mass: "168.93", col: 16, row: 9, category: "lanthanide" },
    { number: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", col: 17, row: 9, category: "lanthanide" },
    { number: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", col: 18, row: 9, category: "lanthanide" },
    { number: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", col: 4, row: 6, category: "transition" }, 
    { number: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", col: 5, row: 6, category: "transition" },
    { number: 74, symbol: "W", name: "Tungsten", mass: "183.84", col: 6, row: 6, category: "transition" },
    { number: 75, symbol: "Re", name: "Rhenium", mass: "186.21", col: 7, row: 6, category: "transition" },
    { number: 76, symbol: "Os", name: "Osmium", mass: "190.23", col: 8, row: 6, category: "transition" },
    { number: 77, symbol: "Ir", name: "Iridium", mass: "192.22", col: 9, row: 6, category: "transition" },
    { number: 78, symbol: "Pt", name: "Platinum", mass: "195.08", col: 10, row: 6, category: "transition" },
    { number: 79, symbol: "Au", name: "Gold", mass: "196.97", col: 11, row: 6, category: "transition" },
    { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", col: 12, row: 6, category: "transition" },
    { number: 81, symbol: "Tl", name: "Thallium", mass: "204.38", col: 13, row: 6, category: "post-transition" },
    { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", col: 14, row: 6, category: "post-transition" },
    { number: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", col: 15, row: 6, category: "post-transition" },
    { number: 84, symbol: "Po", name: "Polonium", mass: "209", col: 16, row: 6, category: "matalloid" },
    { number: 85, symbol: "At", name: "Astatine", mass: "210", col: 17, row: 6, category: "halogen" },
    { number: 86, symbol: "Rn", name: "Radon", mass: "222", col: 18, row: 6, category: "noble" },
    { number: 87, symbol: "Fr", name: "Francium", mass: "223", col: 1, row: 7, category: "alkali" },
    { number: 88, symbol: "Ra", name: "Radium", mass: "226", col: 2, row: 7, category: "alkaline" },
    { number: 89, symbol: "Ac", name: "Actinium", mass: "227", col: 4, row: 10, category: "actinide" },
    { number: 90, symbol: "Th", name: "Thorium", mass: "232.04", col: 5, row: 10, category: "actinide" },
    { number: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", col: 6, row: 10, category: "actinide" },
    { number: 92, symbol: "U", name: "Uranium", mass: "238.03", col: 7, row: 10, category: "actinide" },
    { number: 93, symbol: "Np", name: "Neptunium", mass: "237", col: 8, row: 10, category: "actinide" },
    { number: 94, symbol: "Pu", name: "Plutonium", mass: "224", col: 9, row: 10, category: "actinide" },
    { number: 95, symbol: "Am", name: "Americium", mass: "243", col: 10, row: 10, category: "actinide" },
    { number: 96, symbol: "Cm", name: "Curium", mass: "247", col: 11, row: 10, category: "actinide" },
    { number: 97, symbol: "Bk", name: "Berkelium", mass: "247", col: 12, row: 10, category: "actinide" },
    { number: 98, symbol: "Cf", name: "Californium", mass: "251", col: 13, row: 10, category: "actinide" },
    { number: 99, symbol: "Es", name: "Einsteinium", mass: "252", col: 14, row: 10, category: "actinide" },
    { number: 100, symbol: "Fm", name: "Fermium", mass: "257", col: 15, row: 10, category: "actinide" },
    { number: 101, symbol: "Md", name: "Mendelevium", mass: "258", col: 16, row: 10, category: "actinide" },
    { number: 102, symbol: "No", name: "Nobelium", mass: "259", col: 17, row: 10, category: "actinide" },
    { number: 103, symbol: "Lr", name: "Lawrencium", mass: "262", col: 18, row: 10, category: "actinide" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", mass: "267", col: 4, row: 7, category: "transition" },
    { number: 105, symbol: "Db", name: "Dubnium", mass: "270", col: 5, row: 7, category: "transition" },
    { number: 106, symbol: "Sg", name: "Seaborgium", mass: "271", col: 6, row: 7, category: "transition" },
    { number: 107, symbol: "Bh", name: "Bohrium", mass: "270", col: 7, row: 7, category: "transition" },
    { number: 108, symbol: "Hs", name: "Hassium", mass: "277", col: 8, row: 7, category: "transition" },
    { number: 109, symbol: "Mt", name: "Meitnerium", mass: "276", col: 9, row: 7, category: "transition" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", mass: "281", col: 10, row: 7, category: "transition" },
    { number: 111, symbol: "Rg", name: "Roentgenium", mass: "282", col: 11, row: 7, category: "transition" },
    { number: 112, symbol: "Cn", name: "Copernicium", mass: "285", col: 12, row: 7, category: "transition" },
    { number: 113, symbol: "Nh", name: "Nihonium", mass: "286", col: 13, row: 7, category: "post-transition" },
    { number: 114, symbol: "Fl", name: "Flerovium", mass: "289", col: 14, row: 7, category: "post-transition" },
    { number: 115, symbol: "Mc", name: "Moscovium", mass: "288", col: 15, row: 7, category: "post-transition" },
    { number: 116, symbol: "Lv", name: "Livermorium", mass: "293", col: 16, row: 7, category: "post-transition" },
    { number: 117, symbol: "Ts", name: "Tennessine", mass: "294", col: 17, row: 7, category: "halogen" },
    { number: 118, symbol: "Og", name: "Oganesson", mass: "294", col: 18, row: 7, category: "noble" }
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