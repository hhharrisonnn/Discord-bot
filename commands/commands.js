module.exports = {
  name: 'commands',
  description: "Embeds.",
  aliases: ['c'],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Commands')
    .addFields(
      {name: 'Commands', value: '$commands, $c'},
      {name: 'Play music', value: '$play [keywords or URL]'},
      {name: 'Skip music', value: '$skip'},
      {name: 'Music bot leaves', value: '$leave'},
      {name: 'Balance', value: '$balance, $bal, $b'},
      {name: 'Beg for coins (cringe)', value: '$beg'},
      {name: 'Check your permissions', value: '$perms'},
      {name: 'Purge (for admins only, you cannot delete messages that are older than 14 days).', value: '$purge [number]'},
      {name: 'Look at your own avatar/profile pic', value: '$avatar, $profilepic, $pfp, $icon'},
      {name: 'Weather', value: '$weather [location]'},
    ) 
    .setImage('https://i.imgur.com/ZXZMa3f.png')
    .setFooter('Bot made by Harrison for the K4 boys :)')

    message.channel.send(newEmbed)
  }
}