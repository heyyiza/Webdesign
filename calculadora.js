const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons');

// Função para adicionar os botões ao HTML
function createButtons() {
    buttons.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.addEventListener('click', () => handleButtonClick(value));
        buttonsContainer.appendChild(button);
    });
}

// Função para lidar com cliques dos botões
function handleButtonClick(value) {
    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

// Chama a função para criar os botões
createButtons();