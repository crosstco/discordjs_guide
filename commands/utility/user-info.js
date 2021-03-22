module.exports = {
    name: 'user-info',
    description: 'Info for one user',
    execute(message, args) {
        message.channel.send(
            `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
        );
    },
};
