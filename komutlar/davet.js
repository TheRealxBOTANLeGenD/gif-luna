 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcılarım ", " <@894605186557935677>")

.setDescription(`**Botun Davet Linki ;** [TIKLA](BOTUNUZUN DAVET LINKI) \n**Destek Sunucusu ;** [TIKLA](BOTUNUZUN DAVET LINKI)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'skorsky',
  usage: 'davet'
}; 