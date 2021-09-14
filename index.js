const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', (message) => {

    if(message.channelId === process.env.CHANNEL_ID){
        const memberRole = message.guild.roles.cache.find(role => role.id === process.env.ROLE_ID)
        message.member.roles.add(memberRole);
    }
})

client.login(process.env.TOKEN);

