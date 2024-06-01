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
        li.innerHTML = `
            ${index + 1}. 進場日期: ${transaction.entryDate} 進場時間: ${transaction.entryTime} - 出場日期: ${transaction.exitDate} 出場時間: ${transaction.exitTime}
            <button onclick="editTransaction(${index})">編輯</button>
            <button onclick="deleteTransaction(${index})">刪除</button>
        `;
        transactionList.appendChild(li);
    });
}

function deleteTransaction(index) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.splice(index, 1);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    displayTransactions();
}

function editTransaction(index) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transaction = transactions[index];

    document.getElementById('entryDate').value = transaction.entryDate;
    document.getElementById('entryTime').value = transaction.entryTime;
    document.getElementById('entryPosition').value = transaction.entryPosition;
    document.getElementById('targetPosition').value = transaction.targetPosition;
    document.getElementById('direction').value = transaction.direction;
    document.getElementById('exitDate').value = transaction.exitDate;
    document.getElementById('exitTime').value = transaction.exitTime;

    deleteTransaction(index);
}

document.addEventListener('DOMContentLoaded', displayTransactions);
