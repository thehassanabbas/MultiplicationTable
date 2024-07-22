function generateTable() {
    const number = document.getElementById('numberInput').value;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {

        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.textContent = `${number} x ${i}`;
        const cell2 = document.createElement('td');
        cell2.textContent = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
