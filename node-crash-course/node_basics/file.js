const fs = require('fs');

// read
// this is an async function so the call back will fire only when the first argument is done
// fs.readFile('./txt.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     // returned a Buffer
//     console.log(data.toString());
// });

// because the above readFile method is an async function, it took some time to open the txt file, and then execute the callback function, so the below line will run first.
// console.log('last line');

// write
// also an async function like read
// fs.writeFile('./txt.txt', 'hello word', () => {
//     console.log('file was written');
// })
// for a file didnt exists: create a new file
// fs.writeFile('./txt2.txt', 'hello word', () => {
//     console.log('file was written');
// })

// directories, also async
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// delete files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}