import axios from 'axios';

const getData = async(id) => {
    if (typeof(id) === 'number') {
        const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        const { data: userPosts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

        return { "users": users, "userPosts": userPosts };
    } else
        console.log("Invalid value. The id is not a number!");
}

export default getData;