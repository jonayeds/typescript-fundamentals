{

    type User1 = {    //type declaration 
        name: string;
        age: string
    }

    interface User{ // interface declaration --> interface cannot define a primitive type always defines an object 
        name: string;
        age: number;
    }

    type UserRole1 = User1 & {role: string} // type intersection

    interface UserRole extends User{ // extending an interface from another interface --> inheritance
        role:string;
    }

    interface UserRole2 extends User1{ // extending an interface from a type   --> cannot re assign a different data type to same key
        email: string;
    }

    type UserData = UserRole2 & UserRole1 // type intersection between interface and type

    const newUser : User = {
        name: "John",
        age: 30
    }

    const newUserRole: UserRole = {
        name: "john",
        age: 30,
        role: "admin"
    }

    const ultimateUserData : UserData ={
        name:"john",
        age:"",
        role:"tourist",
        email:""
    } 

    type Roll1 = number[] // type casting array with type
    
    interface Roll2 { // type casting array with interface  
        [index : number]: number // inside an array each index is a number and type of array is number
    }
    const rollNumber: Roll1 = [1,2,3,4,5,6,7,8,9,10]

    type Add = (a:number, b:number) => number
    interface Add2 { // type casting a function using interface
        (a:number, b:number) : string // two number type parameter and a string return type  
    }
    const add :Add2 = (num2, num3)=>{
        return `${num2 + num3}`
    }



}