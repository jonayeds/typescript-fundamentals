{

{
    
    
    type FrontendDeveloper = "fakeDeveloper" | "juniorDeveloper" // String literal type casting using Union type 
    type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper" // String literal type casting 
    const newDeveloper : FrontendDeveloper  = "juniorDeveloper"

    type User  = {
        name: string,
        email: string,
        gender: "male" | "female" // any one of ( string literal | string literal ) are allowed 
        boodGroup: "A+" | "B+" | "O+" | "AB+" 
    }

    const usesr1: User = {
        name: "John",
        email: "XXXXXXXXXXXXXX",
        gender: "male",
        boodGroup: "O+"
    }


}

{
        
        type FrontendDeveloper ={
        skills: string[],
        designation1: "Frontend Developer"
    }

    type BackendDeveloper ={
        skills: string[],
        designation2: "Backend Developer"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper // 2 types are used in a single type --> intersection type

    const fullstackDeveloper : FullstackDeveloper = {
        skills:[""],
        designation1: "Frontend Developer",
        designation2:"Backend Developer"

    }


}








}