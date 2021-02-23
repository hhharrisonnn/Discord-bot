module.exports = {
  name: 'perms',
  description: "this is a check permissions command.",
  execute(message, args, cmd, client, Discord) {
    
    if (message.member.permissions.has("ADMINISTRATOR")) {
      admin = 'You have the admin role. '
    } else {
      admin = ''
    }
    if (message.member.permissions.has("KICK_MEMBERS")) {
      kick = 'You have the permission to kick members. '
    } else {
      kick = ''
    }
    if (message.member.permissions.has("BAN_MEMBERS")) {
      ban = 'You have the permission to ban members. '
    } else {
      ban = ''
    }
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      manage_channels = 'You have the permission to manage channels. '
    } else {
      manage_channels = ''
    }
    if (message.member.permissions.has("VIEW_AUDIT_LOG")) {
      audit = 'You have the permission to view the audit log. '
    } else {
      audit = ''
    }
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      manage_messages = 'You have the permission to manage messages. '
    } else {
      manage_messages = ''
    }
    if (message.member.permissions.has("DEAFEN_MEMBERS")) {
      deafen = 'You have the permission to deafen members. '
    } else {
      deafen = ''
    }
    if (message.member.permissions.has("MOVE_MEMBERS")) {
      move = 'You have the permission to move members. '
    } else {
      move = ''
    }


    //embed for perms
    const permsEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Perms')
    .addFields(
      {name: 'Admin', value: `${admin}`},
      {name: 'Kick members', value: `${kick}`},
      {name: 'Ban members', value: `${ban}`},
      {name: 'Manage channels', value: `${manage_channels}`},
      {name: 'View audit log', value: `${audit}`},
      {name: 'Manage messages', value: `${manage_messages}`},
      {name: 'Deafen memebers', value: `${deafen}`},
      {name: 'Move members', value: `${move}`},
    ) 
    .setFooter('Bot made by Harrison for the K4 boys :)')

    message.channel.send(permsEmbed)
  }
}