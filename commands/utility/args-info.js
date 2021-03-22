module.exports = {
    name: 'args-info',
    description: 'Information about provided arguments',
    args: true,
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    },
};
