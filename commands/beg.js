const profileModel = require('../../models/profileSchema')
module.exports = {
  name: 'beg',
  description: 'begs for coins (yikes)',
  async execute(message, args, cmd, client, Discord, profileData) {
    const randomNumber = Math.floor(Math.random()*500) + 1;
    const response = await profileModel.findOneAndUpdate({
      userID: message.author.id,
    }, {
      $inc: {
        coins: randomNumber,
      }
    });
    return message.channel.send(`${message.author.username} this poor fucker begged and received ${randomNumber} coins.`);
  },
};