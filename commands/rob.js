// const profileModel = require("../models/profileSchema");
// module.exports = {
//   name: 'rob',
//   aliases: ['r'],
//   permissions: [],
//   cooldown: 86400,
//   description: 'steal moneyz from people',
//   async execute(message, args, cmd, client, Discord, profileData) {
//     if(!args.length) return message.channel.send('You need to mention the player to rob them dummy.');
//     let target = message.mentions.users.first();
//     if(!target) return message.channel.send('That person does not exist.');

//     const randomNumber = Math.random().toFixed(2);

//     function targetCoins() {
      
//     }

//     try {
//       const targetData = await profileData.findOne({ userID: target.id });
//       if(!targetData) return message.channel.send('This person does not exist.')
//       await profileModel.findOneAndUpdate({
//         userID: target.id
//       }, {
//         $inc: {
//           coins: ,
//         },
//       });

//       return message.channel.send(``);
//     } catch(err) {
//       console.log(err);
//     }
//   }
// }