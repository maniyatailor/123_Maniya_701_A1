const readline= require('readline');
const {chatbotReply} =require('./chatbot');
const { Console } = require('console');

const r1=readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

console.log("Your's Chatbot");
console.log("Type your message and press Enter.");
console.log("Type 'exit' to quit.\n");

function ask(){
    r1.question('You : ',(input)=>{
        if(input.toLowerCase()==='exit')
        {
            console.log('Bot: Goodbye! Have a wonderful day! 👋');
            r1.close();
            return;
        }
        const reply=chatbotReply(input);
        console.log('Bot : ', reply);
        ask();

    });
}
ask();
