module.exports = {
  name: 'hi',
  description: "this is a hi command",
  execute(message, args) {
    
    if (message.member.roles.cache.some(r => r.name === 'K4')) {
      message.channel.send('hi');
    } else {
      message.channel.send('You don\'t have the permissions to use this command.');
    }
  }
}
