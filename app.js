let totalExpenses = 0;

function addExpense() {
  const expenseInput = document.getElementById('expense-input');
  const categoryInput = document.getElementById('category-input');
  const amountInput = document.getElementById('amount-input');
  const expenseList = document.getElementById('expense-list');
  const totalExpensesDisplay = document.getElementById('total-expenses');

  const expenseText = expenseInput.value.trim();
  const categoryText = categoryInput.value.trim();
  const amountValue = parseFloat(amountInput.value);

  if (expenseText !== '' && !isNaN(amountValue) && amountValue > 0) {
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `<strong>${expenseText}</strong> - ${categoryText} ($${amountValue.toFixed(2)})`;
    expenseList.appendChild(expenseItem);

    totalExpenses += amountValue;
    totalExpensesDisplay.innerText = totalExpenses.toFixed(2);

  
    expenseInput.value = '';
    categoryInput.value = '';
    amountInput.value = '';
  }
}
