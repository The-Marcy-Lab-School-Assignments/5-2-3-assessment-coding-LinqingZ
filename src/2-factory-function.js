const bankAccountFactory = (balance=0) => {
  let balanceValue = balance;
  return{
   checkBalance(){
    return balanceValue

  },
  add(amount){
    balanceValue += amount
    console.log(`$${amount} added.`) 

  },
  subtract(amount){
    balanceValue -= amount
    console.log(`$${amount} subtracted.`)

  }
}

};

module.exports = {
  bankAccountFactory,
};
