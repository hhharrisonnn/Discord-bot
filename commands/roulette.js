const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'roulette',
  aliases: ['r'],
  permissions: [],
  description: 'roulette coins',
  async execute(message, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    if(amount % 1 != 0 || amount <= 0) return message.channel.send('Please enter a valid amount of coins to roulette.');
    try {
      if(amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to roulette.`);
      const randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber == 1) {
        var win = amount * 2;
        message.channel.send(`You won ${amount} coins!`);
      } else {
        var win = -amount;
      }
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: win,
        },
      });

    }catch(err) {
      console.log(err)
    }
  },
} 