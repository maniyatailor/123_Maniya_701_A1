// Prints the current directory name
console.log("Current Directory:", __dirname);

// Prints the current file name with full path
console.log("Current File Name:", __filename);

// Runs the function after 2 seconds
setTimeout(() => {
    console.log("This message is shown after 2 seconds.");
}, 2000);

// Runs the function every 1 second, stops after 3 times
let counter = 0;
const interval = setInterval(() => {
    console.log("Interval count:", ++counter);
    if (counter === 3) {
        clearInterval(interval);
        console.log("Interval cleared after 3 times.");
    }
}, 1000);

// Prints a simple message
console.log("This is a global console log message.");

// Prints information about the current Node.js process
console.log("Process Platform:", process.platform);
console.log("Process Version:", process.version);
