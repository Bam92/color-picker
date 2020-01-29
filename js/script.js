const input = document.querySelector('input');
const area = document.getElementById('displayer');

input.addEventListener('input', () => {
    const currColor = input.value;

    area.style.backgroundColor = currColor;                                                                                                                                                 olor = currColor;
    document.getElementById('hex').innerText = currColor;
});
