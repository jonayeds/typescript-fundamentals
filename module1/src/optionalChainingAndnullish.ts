{
    const age: number = 15;

    const isAdult = age>=18 ? "adult": "Not Adult" // Turnery operator 
    
    console.log({isAdult})

    // Nullish coalescing operator --> to make decision based on null or undefined 
    const isAuthenticated = "";
    const reult1 = isAuthenticated ?? "guest" // only works on null or undefined  --> assigns  the value is its not null or undefined  
    const result2 = isAuthenticated ? "authenticated" : "guest" 
    console.log({reult1}, {result2})

    type User  =  {
        name:string;
        address: {
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    }
    const user: User = {
        name: "John",
        address:{
            city : "Dhaka",
            road: "Gulshan",
            presentAddress: "Dhaka"
        }
    }
    const permanentAddress = user?.address?.permanentAddress ?? "No Address Found"
    console.log({permanentAddress})

}