const input = document.querySelector('input');
const area = document.getElementById('displayer');

const hex2decTable = {
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
};

input.addEventListener('input', () => {
    let currColor = input.value;

    area.style.backgroundColor = currColor;                                                                                                                                                 olor = currColor;
    document.getElementById('hex').innerHTML = currColor;
});
