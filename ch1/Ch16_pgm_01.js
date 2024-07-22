function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];
  
    function addIncome(description, amount) {
      incomes.push({ description, amount });
    }
  
    function addExpense(description, amount) {
      expenses.push({ description, amount });
    }
  
    function totalIncome() {
      return incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    function totalExpense() {
      return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    function accountInfo() {
      return `Name: ${firstName} ${lastName}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nBalance: ${accountBalance()}`;
    }
  
    return {
      addIncome,
      addExpense,
      totalIncome,
      totalExpense,
      accountBalance,
      accountInfo
    };
  }
  
  const myAccount = personAccount('John', 'Doe');
  myAccount.addIncome('Salary', 3000);
  myAccount.addIncome('Freelance', 1500);
  myAccount.addExpense('Rent', 1000);
  myAccount.addExpense('Groceries', 300);
  
  console.log(myAccount.accountInfo());
  /*
  Output:
  Name: John Doe
  Total Income: 4500
  Total Expense: 1300
  Balance: 3200
  */
  