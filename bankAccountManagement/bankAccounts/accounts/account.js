import rl from '../../console/interface.js';
import showMenu from '../../console/index.js';
import accounts from '../user/userInfo.js';
import { findAccount } from './accountUtils.js';

class Bank {
  deposit() {
    try {
      rl.question('Enter your name: ', (name) => {
        const account = findAccount(name, accounts);
        if (!account) {
          console.log('Account not found');
          this.deposit();
        } else {
          rl.question('Enter deposit amount: ', (amount) => {
            amount = parseFloat(amount);
            if (isNaN(amount)) {
              console.log('Invalid amount');
              this.deposit();
            } else {
              account.balance += amount;
              console.log(`Deposit of ${amount} successful`);
              showMenu();
            }
          });
        }
      });
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  balance(){
    try {
        rl.question('Enter your name: ', (name) => {
            const account = findAccount(name, accounts);
            if (!account) {
                console.log('Account not found');
                this.balance();
            } else {
                console.log(`Your balance is ${account.balance}`);
                showMenu();
            }
        });
    }
    catch (err) {
        console.error('An error occurred:', err);
    }
  }

  withdraw(){
    try {
        rl.question('Enter your name: ', (name) => {
            const account = findAccount(name, accounts);
            if (!account) {
                console.log('Account not found');
                this.withdraw();
            } else {
                rl.question('Enter withdrawal amount: ', (amount) => {
                    amount = parseFloat(amount);
                    if (isNaN(amount)) {
                        console.log('Invalid amount');
                        this.withdraw();
                    } else if (account.balance < amount) {
                        console.log('Insufficient balance');
                        this.withdraw();
                    } else {
                        account.balance -= amount;
                        console.log(`Withdrawal of ${amount} successful`);
                        showMenu();
                    }
                });
            }
        });

    }
    catch (err) {
        console.error('An error occurred:', err);
    }

  }
}

export default Bank;

