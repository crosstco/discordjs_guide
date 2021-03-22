const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const { prefix } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(
            `This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
        );
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(
            `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
        );
    }
});

client.login(process.env.BOT_TOKEN);
