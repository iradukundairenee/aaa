function validateDepositInput(amount) {
    if (isNaN(amount) || amount <= 0) {
      return 'Invalid deposit amount';
    }
    return null;
  }
  
  function validateWithdrawalInput(amount, accountBalance) {
    if (isNaN(amount) || amount <= 0) {
      return 'Invalid withdrawal amount';
    } else if (accountBalance < amount) {
      return 'Insufficient balance';
    }
    return null;
  }
  
  function validateAccount(accountName, accounts) {
    const account = accounts.find((acc) => acc.name === accountName);
    if (!account) {
      return 'Account not found';
    }
    return null;
  }
  
  export { validateDepositInput, validateWithdrawalInput, validateAccount };
  