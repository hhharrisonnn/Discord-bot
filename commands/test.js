module.exports = {
  name: 'test',
  permissions: [],
  cooldown: 0,
  description: "this is a test command",
  execute(message, args) {
    message.channel.send('It works :)');
  }
}
