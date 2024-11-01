{
    
let anything : any;
anything = "next";

(anything as string) // using the any type variable as a specific type --> type assertion

const kgToGm = (value:string | number): string | number | undefined =>{
    if(typeof value == "string"){
         return `the value in Gram is : ${parseFloat(value) * 1000}`;
         }
    if(typeof value == "number"){
        return value * 1000;
    }
}

const result1 = kgToGm(1000) as string;
const result2 = kgToGm("2000") as number;
console.log(typeof result2)

type CustomError  = {
    message : string
}


try{

}catch(e ){
    console.log((e as CustomError).message ) // using custom type as assertion
}



}