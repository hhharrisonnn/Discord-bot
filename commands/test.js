module.exports = {
  name: 'test',
  permissions: [],
  description: "this is a test command",
  execute(message, args) {
    message.channel.send('It works :)');
  }
}
