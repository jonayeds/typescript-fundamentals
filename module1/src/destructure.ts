{
    
    const user = {
    name: {
        firstName:"john",
        lastName:"doe"
    },
    age: 30,
    city: "New York"

}

const { name:{ firstName } } = user // cannot type cast when destructuring {keyName: parameter} --> used to  nameAlias(defining as deferent name) a key
const myFriends = ["chandler", "joey", "ross","babul"]
const [ , , bestFriend, ...other] = myFriends
console.log(other)

}