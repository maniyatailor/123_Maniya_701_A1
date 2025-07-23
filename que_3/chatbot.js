module.exports.chatbotReply=function(msg)
{
        const bot={
            age:20,
            name:'Maniya',
            University:"VNSGU",
            Country:"India"
        };

        const message=msg.toLowerCase().trim();

        if(message.includes("Hi") || message.includes("hello") ||message.includes("welcome"))
        {
            return `Hello ! I am ${bot.name}. How can i assist you today ?`;
        }
        if(message.includes("Your age")|| message.includes("How Old")|| message.includes("Age"))
        {
            return `I am ${bot.age} years old.`;

        }
        if(message.includes("how")&& message.includes("are")&& message.includes("you"))
        {
            return `I'm doing great,Thank you`;
        }
        if(message.includes("Where")&& message.includes("live")||message.includes("from"))
        {
            return `I live in ${bot.Country}`;
        }
        if(message.includes("University")||message.includes("Study"))
        {
            return `I studied at ${bot.University}`;
        }
        if(message.includes("Your")||message.includes("Name"))
        {
            return `My name is ${bot.name}`;
        }
        if(message ==='' || message.length<2)
        {
            return "Please say something so I can help you!";
        }
       // return "Sorry, I didn't quite get that. Could you try asking differently? "
}