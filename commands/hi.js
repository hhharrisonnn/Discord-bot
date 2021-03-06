module.exports = {
  name: 'hi',
  permissions: [],
  description: "this is a hi command",
  execute(message, args) {
    message.channel.send('hi');
  }
}
