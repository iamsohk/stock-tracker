function saveData() {
    const entryDate = document.getElementById('entryDate').value;
    const entryTime = document.getElementById('entryTime').value;
    const entryPosition = document.getElementById('entryPosition').value;
    const targetPosition = document.getElementById('targetPosition').value;
    const direction = document.getElementById('direction').value;
    const exitDate = document.getElementById('exitDate').value;
    const exitTime = document.getElementById('exitTime').value;

    const transaction = {
        entryDate,
        entryTime,
        entryPosition,
        targetPosition,
        direction,
        exitDate,
        exitTime
    };

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    displayTransactions();
}

function displayTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${transaction.entryDate} ${transaction.entryTime} - ${transaction.exitDate} ${transaction.exitTime}`;
        transactionList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayTransactions);

