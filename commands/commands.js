module.exports = {
  name: 'commands',
  permissions: [],
  aliases: ['c', 'help', 'h'],
  cooldown: 300,
  description: "Embeds.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('K4 Bot Help')
    .addFields(
      {name: 'Commands', value: '$help, $h, $commands, $c'},
      {name: 'Play music', value: '$play [keywords or URL]'},
      {name: 'Pause music', value: '$pause'},
      {name: 'Unpause music', value: '$unpause'},
      {name: 'Skip music', value: '$skip, $s'},
      {name: 'Music bot leaves', value: '$leave, $l'},
      {name: 'Roulette coins', value: '$roulette, $r'},
      {name: 'Balance', value: '$balance, $bal, $b'},
      {name: 'Deposit coins, 1 day cooldown', value: '$deposit, $dep'},
      {name: 'Withdraw coins from bank', value: '$withdraw, $wd'},
      {name: 'Beg for coins (cringe), 1 hour cooldown', value: '$beg'},
      {name: 'Check your permissions', value: '$perms'},
      {name: 'Purge (for admins only, you cannot delete messages that are older than 14 days).', value: '$purge [number]'},
      {name: 'Look at your own avatar/profile pic', value: '$avatar, $profilepic, $pfp, $icon'},
      {name: 'Weather', value: '$weather [location]'},
    ) 
    .setFooter('Bot made by Harrison for the K4 boys :)')

    message.channel.send(newEmbed)
  }
}