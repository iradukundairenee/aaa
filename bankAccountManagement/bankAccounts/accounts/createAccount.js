import rl from '../../console/interface.js'
import accounts from '../user/userInfo.js';
import showMenu from '../../console/index.js';

const createAccount = () => {
    rl.question('Enter your name: ', (name) => {
        const account = {
            name: name,
            balance: 0
        };
        accounts.push(account);
        console.log(`Account created for ${name}`);
        showMenu();
    });
}
export default createAccount;

