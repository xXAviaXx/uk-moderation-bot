module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member, because no member was mentioned!`);
        }
    }
}