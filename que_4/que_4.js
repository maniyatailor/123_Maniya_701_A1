const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Folder to zip
const folderToZip = 'Files'; 
const outputZipFile = 'Files.zip'; 

// Create a file to stream archive data to.
const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Listen for archive completion
output.on('close', () => {
  console.log(`✅ Archive created: ${outputZipFile} (${archive.pointer()} total bytes)`);
});

// Handle errors
archive.on('error', err => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append the entire folder (recursively)
archive.directory(folderToZip, false);

// Finalize the archive (i.e., finish writing files)
archive.finalize();




//}

// const fs = require('fs');
// const path = require('path');
// const archiver = require('archiver');

// // Path to the folder you want to zip
// const folderToZip = path.join(__dirname, 'myfolder');
// const outputZipPath = path.join(__dirname, 'myfolder.zip');

// // Create a file to stream archive data to
// const output = fs.createWriteStream(outputZipPath);
// const archive = archiver('zip', {
//   zlib: { level: 9 } // Maximum compression
// });

// output.on('close', function () {
//   console.log(`✅ Zip created: ${outputZipPath}`);
//   console.log(`📦 ${archive.pointer()} total bytes`);
// });

// archive.on('error', function (err) {
//   throw err;
// });

// // Pipe archive data to the file
// archive.pipe(output);

// // Append folder (recursively)
// archive.directory(folderToZip, false);

// // Finalize the archive (i.e. finish writing files)
// archive.finalize();
