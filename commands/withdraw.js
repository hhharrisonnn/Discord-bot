module.exports = {
  name: 'withdraw',
  aliases: ['wd'],
  description: 'withdraw coins from your bank',
  async execute(message, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    if(amount % 1 != 0 || amount <= 0) return message.channel.send('Please enter a valid amount of coins to deposit.');
    
    try {
      if(amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw.`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: amount,
          bank: -amount,
        },
      });
  
      return message.channel.send(`You withdrew ${amount} coins from your bank.`)

    }catch(err) {
      console.log(err)
    }
  }
}