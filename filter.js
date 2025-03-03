const products = [
    {
        name: 'PA11',
        compressed: true,
        water: false,
        nonAggressiveGases: false,
        neutralGas: true,
        lubricant: true,
        solvents: true,
        saitSolutions: true,
        t60: false,
        t100: true,
        polyethylene: false,
        polyamide: true,
        sizes: {
            mm4: false,
            mm6: true,
            mm8: true,
            mm10: true,
            mm12: true,
        },
        colors: {
            blue: true,
            natural: false,
            orange: false,
        },
    },
    {
        name: 'PEN',
        compressed: true,
        water: true,
        nonAggressiveGases: true,
        neutralGas: false,
        lubricant: false,
        solvents: false,
        saitSolutions: false,
        t60: true,
        t100: false,
        polyethylene: true,
        polyamide: false,
        sizes: {
            mm4: true,
            mm6: true,
            mm8: true,
            mm10: true,
            mm12: true,
        },
        colors: {
            blue: true,
            natural: true,
            orange: true,
        },
    },
    {
        name: 'ТРУБКА 3',
        compressed: true,
        water: true,
        nonAggressiveGases: true,
        neutralGas: false,
        lubricant: false,
        solvents: false,
        saitSolutions: false,
        t60: true,
        t100: false,
        polyethylene: true,
        polyamide: false,
        sizes: {
            mm4: true,
            mm6: true,
            mm8: true,
            mm10: true,
            mm12: true,
        },
        colors: {
            blue: true,
            natural: true,
            orange: true,
        },
    },
    {
        name: 'ТРУБКА 4',
        compressed: true,
        water: false,
        nonAggressiveGases: true,
        neutralGas: false,
        lubricant: false,
        solvents: false,
        saitSolutions: false,
        t60: true,
        t100: false,
        polyethylene: true,
        polyamide: false,
        sizes: {
            mm4: true,
            mm6: false,
            mm8: true,
            mm10: true,
            mm12: false,
        },
        colors: {
            blue: true,
            natural: true,
            orange: false,
        },
    },
    {
        name: 'ТРУБКА 5',
        compressed: false,
        water: false,
        nonAggressiveGases: false,
        neutralGas: true,
        lubricant: true,
        solvents: true,
        saitSolutions: false,
        t60: true,
        t100: true,
        polyethylene: true,
        polyamide: false,
        sizes: {
            mm4: true,
            mm6: false,
            mm8: false,
            mm10: true,
            mm12: true,
        },
        colors: {
            blue: false,
            natural: true,
            orange: true,
        },
    },
]


const parameterMapping = {
    compressed: 'Сжатый воздух',
    water: 'Вода',
    nonAggressiveGases: 'Неагрессивные газы',
    neutralGas: 'Нейтральный газ',
    lubricant: 'Смазочные материалы',
    solvents: 'Растворители',
    saitSolutions: 'Солевые растворы',
    t60: 'Температура до 60°С',
    t100: 'Температура до 100°С',
    polyethylene: 'Полиэтилен',
    polyamide: 'Полиамид',
    mm4: '4 мм',
    mm6: '6 мм',
    mm8: '8 мм',
    mm10: '10 мм',
    mm12: '12 мм',
    blue: 'Синий',
    natural: 'Естественный',
    orange: 'Оранжевый'
}

const block = document.getElementById('block')
const filter = document.getElementById('filter')
const FILTER_WORK = document.getElementById('filter-works')
const FILTER_TEMPEARATURE = document.getElementById('filter-temperature')
const FILTER_MATERIALS = document.getElementById('filter-materials')
const FILTER_SIZE = document.getElementById('filter-size')
const FILTER_COLOR = document.getElementById('filter-color')
filter.classList.add('filters')

function createCheckboxesSizeColors () {
    
}

function createCheckboxes () {
    const keys = Object.keys(products[0]);

    keys.splice(1, 7).forEach(key => {
        if( FILTER_WORK) {
            const label = document.createElement('label')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.value = key
            checkbox.addEventListener('change', filterProducts);
            label.appendChild(checkbox)
            label.appendChild(document.createTextNode(parameterMapping[key] || key))
            FILTER_WORK.appendChild(label)
        }
       
    })

    keys.splice(1, 2).forEach(key => {
        if(FILTER_TEMPEARATURE) {
            const label = document.createElement('label')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.value = key
            checkbox.addEventListener('change', filterProducts);
            label.appendChild(checkbox)
            label.appendChild(document.createTextNode(parameterMapping[key] || key))
            FILTER_TEMPEARATURE.appendChild(label)
        }
    })

    keys.splice(1, 2).forEach(key => {
        if(FILTER_MATERIALS) {
            const label = document.createElement('label')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.value = key
            checkbox.addEventListener('change', filterProducts);
            label.appendChild(checkbox)
            label.appendChild(document.createTextNode(parameterMapping[key] || key))
            FILTER_MATERIALS.appendChild(label)
        }
    })

    const colors = ['blue', 'natural', 'orange'];
    colors.forEach(color => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = color;
        checkbox.addEventListener('change', filterProducts);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(parameterMapping[color] || color));
        FILTER_COLOR.appendChild(label);
    });

    const sizes = ['mm4', 'mm6', 'mm8', 'mm10', 'mm12'];
    sizes.forEach(size => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = size;
        checkbox.addEventListener('change', filterProducts);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(parameterMapping[size] || size));
        FILTER_SIZE.appendChild(label);
    });

}


function filterProducts() {
    const checkedCheckboxes = document.querySelectorAll('#filter input:checked');
    const filters = Array.from(checkedCheckboxes).map(checkbox => checkbox.value);

    // Разделяем фильтры на категории
    const mainFilters = filters.filter(filter => 
        !['blue', 'natural', 'orange', 'mm4', 'mm6', 'mm8', 'mm10', 'mm12'].includes(filter)
    );
    const colorFilters = filters.filter(filter => 
        ['blue', 'natural', 'orange'].includes(filter)
    );
    const sizeFilters = filters.filter(filter => 
        ['mm4', 'mm6', 'mm8', 'mm10', 'mm12'].includes(filter)
    );

    const filteredProducts = products.filter(product => {
        // Проверка по основным параметрам
        const matchesMainFilters = mainFilters.length === 0 || 
            mainFilters.every(filter => product[filter] === true);

        // Проверка по цветам
        const matchesColors = colorFilters.length === 0 || 
            colorFilters.some(color => product.colors[color]);

        // Проверка по размерам
        const matchesSizes = sizeFilters.length === 0 || 
            sizeFilters.some(size => product.sizes[size]);

        // Продукт должен соответствовать всем условиям
        return matchesMainFilters && matchesColors && matchesSizes;
    });

    displayProducts(filteredProducts);
}

function displayProducts (filteredProducts) {
    block.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('card')
        productDiv.textContent = `Product: ${product.name}`
        block.appendChild(productDiv)
    })
}

function removeFilters() {
    const checkedCheckboxes = document.querySelectorAll('#filter input:checked')
    checkedCheckboxes.forEach(checkbox => {
        checkbox.checked = false
    })
    displayProducts(products);
}



createCheckboxes();
displayProducts(products); // Показываем все продукты при загрузке