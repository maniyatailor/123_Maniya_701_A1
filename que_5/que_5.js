const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

// Path to the ZIP file
const zipFilePath = 'file.zip'; 
const outputDir = 'file';  

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Extract the ZIP file
fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on('close', () => {
    console.log(`✅ Extraction completed to: ${outputDir}`);
  })
  .on('error', (err) => {
    console.error('❌ Error during extraction:', err);
  });

