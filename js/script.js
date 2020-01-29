const input = document.querySelector('input');
const area = document.getElementById('displayer');
const pageBorder = document.getElementById('container')

input.addEventListener('input', () => {
    const currColor = input.value;

    area.style.backgroundColor = currColor;
    pageBorder.style.border = '2px solid' + currColor;                                                                                                                                                 olor = currColor;
    document.getElementById('hex').innerText = currColor;
});
