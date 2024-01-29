document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#expense-form');
  const expenseInput = document.querySelector('#expense-input');
  const expenseList = document.querySelector('#expense-list');

  form.addEventListener('submit', addExpense);

  function addExpense(event) {
    event.preventDefault();

    const expenseText = expenseInput.value.trim();
    if (expenseText !== '') {
      const expenseItem = document.createElement('li');
      expenseItem.innerText = expenseText;
      expenseList.appendChild(expenseItem);
      expenseInput.value = '';
    }
  }
});
