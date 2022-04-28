import getData from "./app.js";

const userId = 3;

const result = await getData(userId);

console.log(result);

// alternative outputs
// ===================
// console.log(`Result of users with userId = ${userId}`);
// console.log("================================");

// console.log(result.users);

// console.log(`Result of posts with userId = ${userId}`);
// console.log("================================");

// console.log(result.userPosts);