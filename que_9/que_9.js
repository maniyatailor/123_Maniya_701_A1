const fs = require('fs');

// Write a file
fs.writeFile('example.txt', 'Hello, Maniya! This is a Node.js FS module demo.', (err) => {
    if (err) throw err;
    console.log(' File created successfully.');

    // Append content
    fs.appendFile('example.txt', '\nAppending new content.', (err) => {
        if (err) throw err;
        console.log(' Content appended successfully.');

        // Read file content
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log(' File content:\n' + data);

            // Rename the file
            fs.rename('example.txt', 'renamed_example.txt', (err) => {
                if (err) throw err;
                console.log(' File renamed successfully.');

                // Delete the file
                fs.unlink('renamed_example.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});
