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
      kick = 'You have the permission to kick memebers. '
    } else {
      kick = ''
    }
    if (message.member.permissions.has("BAN_MEMBERS")) {
      ban = 'You have the permission to ban memebers. '
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
    message.channel.send(admin + kick + ban + manage_channels + audit + manage_messages + deafen + move);
  }
}