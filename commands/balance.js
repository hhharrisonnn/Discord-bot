module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  description: 'check balance',
  execute(message, args, cmd, client, Discord, profileData) {
    let balance = profileData.coins;
    let bank = profileData.bank;
    message.channel.send(`Your wallet balance is: ${profileData.coins}, your bank balance is: ${profileData.bank}`); 

  //embed
  const newEmbed = new Discord.MessageEmbed()
  .setColor('#304281')
  .setTitle('Commands')
  .addFields(
    {name: 'Balance:', value: `${profileData.coins}`},
    {name: 'Bank:', value: `${profileData.bank}`},
  ) 
  .setFooter('Bot made by Harrison for the K4 boys :)')

  message.channel.send(newEmbed)
  }
}