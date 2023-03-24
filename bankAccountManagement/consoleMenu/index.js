import rl from './interface.js'
import Bank from '../bankAccounts/accounts/account.js';
import createAccount from '../bankAccounts/accounts/createAccount.js';

const bank = new Bank();
const showMenu=()=>{
  console.log('1. Create Account');
  console.log('2. Deposit');
  console.log('3. Withdraw');
  console.log('4. Balance');
  console.log('5. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch(choice) {
      case '1':
        createAccount();
        break;
      case '2':
        bank.deposit();
        break;
      case '3':
        bank.withdraw();
        break;
      case '4':
        bank.balance();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid choice');
        showMenu();
    }
  });
}
showMenu();
export default showMenu;
