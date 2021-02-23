const { TeamMember } = require('discord.js');
const profileModel = require('../../models/profileSchema');

module.exports = async(message, args, cmd, client, Discord) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0
  })
  profile.save();
}