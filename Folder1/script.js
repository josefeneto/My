function calculateStats() {
    // Get values from input fields
    const grades = [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value)
    ];

    // Check for invalid input
    if (grades.some(isNaN)) {
        alert('Please enter all grades.');
        return;
    }

    // Calculate stats
    const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    const best = Math.max(...grades);
    const worst = Math.min(...grades);

    // Display results
    document.getElementById('average').textContent = average;
    document.getElementById('best').textContent = best;
    document.getElementById('worst').textContent = worst;
}