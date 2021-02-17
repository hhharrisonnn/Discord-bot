module.exports = {
  name: 'purge',
  description: "purge messages.",

 async  execute(client, message, args) {
  if (message.member.permissions.has("ADMINISTRATOR")) {
      if (!args[0]) return message.reply("please enter the amount of messages to clear.");
      if(isNaN(args[0])) return message.reply("please type a real number.");
      if(args[0] > 100) return message.reply("you can't remove more than 100 messages.");
      if(args[0] < 1) return message.reply("you have to delete at least one message.");
      await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
          message.channel.bulkDelete(messages)
    });
  } else {
    message.channel.send('You don\'t have the permissions to use this command.');
  }
  }
} 