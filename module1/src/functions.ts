{ // implementing code inside a scope so that can re declare same variable on other files
     



function add(number1 : number, number2 :number): number{ // normal function ( parameter : data-type, ... ): return data-type
    return number1+number2
}

add(2,2)

const addArrow = (num1:number, num2:number =10 ): number=>{ // arrow function ( parameter : data-type, ... ): return data-type 
    return ( num1+num2)
}

//  function inside an object --> method 
// normal function can use 'this' keyword but arrow function cannot 
const poorUser = {
    name: "gorib",
    balance: 0,
    addBalance(balance: number): number{ //---> method
        return this.balance += balance
    } 
}

addArrow(2,2)

const arr : number[] = [1,2,3,4];

const newArray = arr.map((elem:number): number => elem*elem) // ( parameter : data-type ): return type



}