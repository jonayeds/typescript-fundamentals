{
    type Student ={ // creating a template typeAlias to use as type other variables
        name:string,
        age:number,
        gender:string,
        contactNo?: string
        address:string
    }
    const student : Student = {
        name: "John",
        age: 30,
        gender: "male",
        address: "123 Main St"
    }

    const student2:Student= {
        name: "Jane",
        age: 25,
        gender: "female",
        contactNo: "000000000000",
        address: "456 Oak St"
    }

    type Add = (num1:number, num2:number)=>number // type casting a function as a type 
    const add:Add = (a,b)=> a+b // using custom function type

}