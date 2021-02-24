//require('dotenv').config();
const profileModel = require('../../models/profileSchema');

module.exports = async (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if(!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0
      });
      profile.save();
    }
  } catch(err) {
    console.log(err)
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  try {
    command.execute(message, args, cmd, client, Discord, profileData);
  } catch(err) {
    message.reply("I do not recognise this command. Learn to spell or something dumbass.");
    console.log(err);
  }
};