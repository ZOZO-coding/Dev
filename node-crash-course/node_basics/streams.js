const fs = require('fs');

const readStream = fs.createReadStream('./docs/txt3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/txt4.txt')

// .on is an event listener, a data event: every time we receives a buffer data event
// readStream.on('data', (chunk) => {
//     console.log('----- new chunk -----');
//     console.log(chunk);
//     writeStream.write('\nNew CHUNK');
//     writeStream.write(chunk);
// })

// piping
// doing same thing as above, write readable stream to a new file
readStream.pipe(writeStream);