module.exports = {
  name: 'hi',
  permissions: [],
  cooldown: 0,
  description: "this is a hi command",
  execute(message, args) {
    message.channel.send('hi');
  }
}
