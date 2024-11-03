{


    type GenericArray<t> = Array<t> // using one type to define all array

    // const rollNumbers : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // const rollNumbers : Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; // defining the type of array using generic type 
    const rollNumbers : GenericArray<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];  // using re usable type
   
    // const mentors: string[] =["x", "y", "z"]
    // const mentors: Array<string> =["x", "y", "z"]
    const mentors: GenericArray<string> =["x", "y", "z"]
   
    // const boolArray : boolean[] = [true, false, true, false]
    // const boolArray : Array<boolean> = [true, false, true, false]
    const boolArray : GenericArray<boolean> = [true, false, true, false]



    const user : GenericArray<{name:string; age:number; role:string}> = [ // type casting an array of object using generic array type
        {
            name:"john",
            age: 30,
            role: "admin" 
        },
        {
            name:"john",
            age: 30,
            role: "admin" 
        }
    ]
    type GenericTuple<x,y> = [x, y] // declaring tuple as a generic type takes x and y parameters(data types)  
    const manus : GenericTuple<string, string>  = ["x", "y"] // re using the generic type
    const userWithId: GenericTuple<number, {name:string; email:string}> = [0, {name:"john", email:""} ] // re using the generic type



}