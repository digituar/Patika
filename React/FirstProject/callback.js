// setTimeout(() => {
//     console.log("Merhaba");
// }, 5000)

// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım.");
// }, 1000)

// const sayHi = (cb) => {
//     //console.log("merhaba");
//     cb();
// };

// sayHi(() => {
//     console.log("Hello");
// });

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {

//         console.log("Users yüklendi!", users);

//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then((data) => data.json())
//             .then((post) => {
//                 console.log("Post 1 yüklendi!", post);

//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then((data) => data.json())
//                     .then((data) => {
//                         console.log("Post 2 yüklendi!", data);
//                     });
//             });
//     });

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("uses", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();

(() => {
    console.log("Selam");
})();