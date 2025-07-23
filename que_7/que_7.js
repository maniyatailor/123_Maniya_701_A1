// npm install node-fetch@2 install this
const fetch = require('node-fetch');

async function fetchGoogle() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text();  // Get response as text (HTML)
    console.log(data);  // Print the HTML of Google homepage
    console.log("\nYour Google page Fetch Successfully");
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogle();
