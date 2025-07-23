const fs = require('fs');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// Path to the file you want to delete
const filePath = 'File.txt'; // replace with your file name

// Async function to delete the file
async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`✅ File delete
    deleted file: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error deleting file:`, err.message);
  }
}

// Call the function
deleteFile();

