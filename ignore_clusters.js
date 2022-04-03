// // This code is for learning purposes only. The app uses PM2 for horizontal scaling so I just wrote this for my own understanding's sake.
// // If you want to run it - place it in a new project and install express on it. 

// const express = require('express');
// const cluster = require('cluster');
// const os = require('os');

// const app = express();

// /*
//     This is not API call, therefore it is processed on JavaScript's Event Loop
//     (it's not a file or network operation and is therefore not sent to the
//     Node.js thread pool or passed to the OS respectively)
// */
// function delay(durationInMilliseconds) {
//     const startTime = Date.now();

//     while (Date.now() - startTime < durationInMilliseconds) {
//         /* 
//         Event Loop completely blocked... 
//         Server cannot do anything else while this is looping.

//         If we open 2 tabs on chrome and try to go to /timer quickly after each other:
//         1st will take 9 seconds, but because Node cannot process the 2nd due to 1st one
//         blocking it - 2nd one will take 18 seconds to finish. (again, this is our main
//         Event Loop and JavaScript is synchronous & single-threaded. Node is not delegating
//         work to its threads or our OS because it's a simple JS function.)

//         This is obviously an artificial example, because we can delegate the work to a 
//         non-blocking functionality like .setTimeout() which will send it to libuv's 
//         Event Loop and JavaScript's thread will meanwhile continue its execution.

//         Real world examples: JSON.stringify({}) => "{}" and JSON.parse("{}") => {}
//         Funny little example, but what if we are logging objects and/or we have 
//         tens/hundreds of thousands of users? It can quickly spiral out of control.

//         What about array.sort() for large arrays? crypto module functions where we 
//         intentionally slow hashing?

//         How do we fix this?

//         One approach is to use Clusters - Clusters of Node.js processes can be used
//          to run multiple instances of Node.js that can distribute workloads among 
//          their application threads.

//          Important, Important and Important: In order to see this in practice - 
//          you will have a bit of an issue with Chrome as it forces similar 
//          requests to wait for each other (even if we have multiple processes listening).
//          In order to fix it you have to disable the cache in Chrome. 
//          It may not work on your Windows machine still - it didn't work on mine, but on Edge
//          it worked fine with cache disabled. You can make sure by checking if they are running
//          at the same process ids.
//         */
//     }
// }

// app.get('/', (req, res) => {
//     res.send(`Node is metal! Process running at: ${process.pid}`);
// })

// app.get('/timer', (req, res) => {
//     // delay response
//     delay(9000);
//     res.send(`Click click boom! Process running at: ${process.pid}`);
// })

// // This is good, but still if we have more requests than clusters - it fails pretty quickly.
// // if (cluster.isMaster) {
// //     console.log('Master has been started...');
// //     cluster.fork();
// //     cluster.fork();

// // We can take advantage of the OS's cores though.
// if (cluster.isMaster) {
//     console.log('Master has been started...');
//     const NUM_WORKERS = os.cpus().length; // # of logical cores
//     for (let i = 0; i < NUM_WORKERS; i++) {
//         cluster.fork();
//     }
// } else {
//     console.log('Worker process started.');

//     // Only worker processes listen for app requests and they all listen on same port.
//     app.listen('3000');
// }