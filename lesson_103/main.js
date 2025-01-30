/* const user = {
    name: 'Vladimir',
    surName: 'Sverchkov',
    age: 22,
    isAdmin: true
}

console.log(`Hello ${user.name} `) */

const users = [
    {
        name: 'user1',
        age: 30,
        isAdmin: false,
    },
    {
        name: 'user1',
        age: 35,
        isAdmin: false,
    },
    {
        name: 'user1',
        age: 25,
        isAdmin: true,
    },
    {
        name: 'user1',
        age: 30,
        isAdmin: false,
    },
    {
        name: 'user1',
        age: 35,
        isAdmin: false,
    },
    {
        name: 'user1',
        age: 25,
        isAdmin: true,
    }
];

let simpleUserCount = 0;

for (let user of users){
//for (let i = 0; i < users.length; i++) {
    //const user = users[i]
    if(!user.isAdmin) {
        simpleUserCount++;
    }

}

console.log("Количество простых пользователей:", simpleUserCount);