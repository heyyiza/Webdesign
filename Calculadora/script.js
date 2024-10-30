const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/'
];
const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons-container');
function updateDisplay(value) {
    if (value === 'C') {
        display.value = ''; 
    } else if (value === '=') {
        try {
            display.value = eval(display.value); 
        } catch {
            display.value = 'Erro';
        }
    } else {
        display.value += value; 
    }
}
buttons.forEach(button => {
    const btnElement = document.createElement('button');
    btnElement.textContent = button;
    btnElement.classList.add('button');
    btnElement.addEventListener('click', () => updateDisplay(button));
    buttonsContainer.appendChild(btnElement);
});
