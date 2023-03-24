import rl from '../../consoleMenu/interface.js';
import showMenu from '../../consoleMenu/index.js';
import accounts from '../user/userInfo.js';
import { findAccount } from './accountUtils.js';
import { validateDepositInput, validateWithdrawalInput, validateAccount } from '../validations.js';
import {printSuccess,printError} from '../../consoleMenu/console.js'

class Bank {
  deposit() {
    rl.question('Enter your name: ', (name) => {
      const account = findAccount(name, accounts);
      const error = validateAccount(name, accounts);
      if (error) {
        printError(error);
        this.deposit(printError, printSuccess);
        return;
      }
      rl.question('Enter deposit amount: ', (amount) => {
        amount = parseFloat(amount);
        const error = validateDepositInput(amount);
        if (error) {
          printError(error);
          this.deposit(printError, printSuccess);
          return;
        }
        account.balance += amount;
        printSuccess(`Deposit of ${amount} successful`);
        showMenu();
      });
    });
  }

  balance() {
    rl.question('Enter your name: ', (name) => {
      const account = findAccount(name, accounts);
      const error = validateAccount(name, accounts);
      if (error) {
        printError(error);
        this.balance(printError, printSuccess);
        return;
      }
      printSuccess(`Your balance is ${account.balance}`);
      showMenu();
    });
  }

  withdraw() {
    rl.question('Enter your name: ', (name) => {
      const account = findAccount(name, accounts);
      const error = validateAccount(name, accounts);
      if (error) {
        printError(error);
        this.withdraw(printError, printSuccess);
        return;
      }
      rl.question('Enter withdrawal amount: ', (amount) => {
        amount = parseFloat(amount);
        const error = validateWithdrawalInput(amount, account.balance);
        if (error) {
          printError(error);
          this.withdraw(printError, printSuccess);
          return;
        }
        account.balance -= amount;
        if (account.balance < 0) {
          account.balance += amount;
          printError("Withdrawal failed. Insufficient funds.");
          showMenu();
        } else {
          printSuccess(`Withdrawal of ${amount} successful`);
          showMenu();
        }
      });
    });
  }
  
}

export default Bank;
