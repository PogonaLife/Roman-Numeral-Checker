document.getElementById('convert-btn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('number').value, 10);
    const output = document.getElementById('output');

    if (isNaN(number)) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    if (number < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        return;
    }

    if (number >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        return;
    }

    output.textContent = convertToRoman(number);
});

function convertToRoman(num) {
    const romanNumeralPairs = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let roman = '';
    for (let i = 0; i < romanNumeralPairs.length; i++) {
        while (num >= romanNumeralPairs[i][0]) {
            roman += romanNumeralPairs[i][1];
            num -= romanNumeralPairs[i][0];
        }
    }
    return roman;
}