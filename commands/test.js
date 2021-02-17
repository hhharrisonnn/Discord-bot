module.exports = {
  name: 'test',
  description: "this is a test command",
  execute(message, args) {
    
    if (message.member.roles.cache.some(r => r.name === 'mod')) {
      message.channel.send('Testing works');
    } else {
      message.channel.send('You don\'t have the permissions to use this command.');
    }
  }
}
