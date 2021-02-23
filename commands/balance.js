module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  description: 'check balance',
  execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(`Your wallet balance is: ${profileData.coins}, your bank balance is: ${profileData.bank}`);
  } 
}