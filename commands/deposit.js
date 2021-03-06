const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'deposit',
  description: 'deposit coins',
  async execute(message, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    if(amount % 1 != 0 || amount <= 0) return message.channel.send('Desposit amount must be a whole number.');
    try {
      if(amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to deposit.`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -amount,
          bank: amount,
        },
      });

      return message.channel.send(`You deposited ${amount} of coins into your bank.`)
    }catch(err) {
      console.log(err)
    }
  },
}