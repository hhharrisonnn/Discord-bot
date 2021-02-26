module.exports = () => {
  console.log('K4 Bot is online.');
  client.user.setPresence ({
    status: "online",
    game: {
      name: "$c",
      type: "PLAYING"
    }
  });
}