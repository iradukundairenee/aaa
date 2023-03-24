import rl from '../../consoleMenu/interface.js'
import accounts from '../user/userInfo.js';
import showMenu from '../../consoleMenu/index.js';
import {printSuccess} from '../../consoleMenu/console.js'


const createAccount = () => {
    rl.question('Enter your name: ', (name) => {
        const account = {
            name: name,
            balance: 0
        };
        accounts.push(account);
        printSuccess(`Account created for ${name}`);
        showMenu();
    });
}
export default createAccount;

