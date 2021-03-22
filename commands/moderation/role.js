module.exports = {
    name: 'role',
    description: 'Assign a role to a user',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
        message.channel.send(`Pretended to assign role to user`);
    },
};
