// // // This code is for learning purposes only. The app uses PM2 for horizontal scaling so I just wrote this for my own understanding's sake.
// // // If you want to run it - place it in a new project and install express on it. 
// const { isMainThread, workerData, Worker } = require('worker_threads');

// if (isMainThread) {
//     console.log(`Main Thread! Process ID: ${process.pid}`);

//     // With Worker Threads we can do computation heavy tasks. Neat! 
//     new Worker(__filename, {
//         workerData: [7, 6, 2, 3]
//     });
//     new Worker(__filename, {
//         workerData: [1, 3, 4, 2]
//     });
// } else {
//     // Remember, Worker threads are all part of the same process
//     console.log(`I am a Worker Thread! Process ID: ${process.pid}`);
//     console.log(`${workerData} sorted is equal to ${workerData.sort()}`);

//     // in clusters, our process.pid will be different but here they should all be 
//     // the same as they all run on the same process.
// }