const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
  name: 'play',
  aliases: ['p', 'skip', 'leave', 'pause', 'unpause'],
  description: 'music bot',
  async execute(message, args, cmd, client, Discord) {

    const voice_channel = message.member.voice.channel;
    if (!voice_channel) return message.channel.send('You need to be in a voice channel to execute this command.');
    const permissions = voice_channel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('You do not have the correct permissions.');
    if (!permissions.has('SPEAK')) return message.channel.send('You do not have the correct permissions.');

    const server_queue = queue.get(message.guild.id);

    if (cmd === 'play') {
      if (!args.length) return message.channel.send('You need to send the second argument. ($play [song/URL]');
      let song = {};

      if (ytdl.validateURL(args[0])) {
        const song_info = await ytdl.getInfo(args[0]);
        song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
      } else {

        const video_finder = async (query) => {
          const videoResult = await ytSearch(query);
          return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await video_finder(args.join(' '));
        if (video) {
          song = { title: video.title, url: video.url }
        } else {
          message.channel.send('Error finding video.')
        }
      }

      if (!server_queue) {
      
        const queue_constructor = {
          voice_channel: voice_channel,
          text_channel: message.channel,
          connection: null,
          songs: []
        }
  
        queue.set(message.guild.id, queue_constructor);
        queue_constructor.songs.push(song);
  
        try {
          const connection = await voice_channel.join();
          queue_constructor.connection = connection;
          video_player(message.guild, queue_constructor.songs[0]);
        } catch (err) {
          queue.delete(message.guild.id);
          message.channel.send('There was an error connecting.');
          throw err;
        }
      } else {
        server_queue.songs.push(song);
        var newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Music :notes:')
        .addFields(
          {name: 'Queued:', value: `👍 **${song.title}**`},
        )
        .setFooter('Bot made by Harrison for the K4 boys :)')
        return message.channel.send(newEmbed)
      }
    }

    else if (cmd === 'skip') skip_song(message, server_queue);
    else if (cmd === 'leave') stop_song(message, server_queue);
    else if (cmd === 'pause') pause_song(message, server_queue);
    else if (cmd === 'unpause') unpause_song(message, server_queue);
  }
}

const video_player = async (guild, song) => {
  const song_queue = queue.get(guild.id);

  if (!song) {
    song_queue.voice_channel.leave();
    queue.delete(guild.id);
    return;
  }
  const stream = ytdl(song.url, { filter: 'audioonly'});
  song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
  .on('finish', () => {
    song_queue.songs.shift();
    video_player(guild, song_queue.songs[0]);
  });
  var newEmbed2 = new Discord.MessageEmbed()
  .setColor('#304281')
  .setTitle('Music :notes:')
  .addFields(
    {name: 'Playing:', value: `:play_pause: Now playing **${song.title}** 🎶`},
  )
  .setFooter('Bot made by Harrison for the K4 boys :)')
  return message.channel.send(newEmbed2)

  //await song_queue.text_channel.send(`:play_pause: Now playing **${song.title}** 🎶`);
}

const skip_song = (message, server_queue) => {
  if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command.');
  if (!server_queue) {
    return message.channel.send('There are no songs in the queue. :weary:');
  }
  server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
  if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command.');
  server_queue.songs = [];
  server_queue.connection.dispatcher.end();
  message.channel.send('Leaving :sob:');
}

const pause_song = (message, server_queue) => {
  if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command.');
  if(server_queue.connection.dispatcher.paused) return message.channel.send("Song is already paused!");
  server_queue.connection.dispatcher.pause();
  message.channel.send(":pause_button: Paused");
}

const unpause_song = (message, server_queue) => {
  if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command.');
  if(!server_queue.connection.dispatcher.paused) return message.channel.send("Song isn't paused!");
  server_queue.connection.dispatcher.resume();
  message.channel.send(":play_pause: Unpaused");
}