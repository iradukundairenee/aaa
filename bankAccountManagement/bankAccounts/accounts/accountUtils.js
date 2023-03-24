

  export const findAccount=(name, accounts)=>{
    return accounts.find(acc => acc.name === name) || null;
  }
  