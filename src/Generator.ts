class Generator {
    generateNumbers(max: number) {
        var numbers = [];
        for (let i = 0; i <= max; i++) {
            numbers.push(i);
        }
        return numbers;
    }
}

export default Generator;