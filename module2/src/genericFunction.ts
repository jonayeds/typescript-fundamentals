{


    const createArray = (param:string) : string[]=>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param:T): T[]=>{ //creating a function with generic parameter type --> takes the type os T  and operates according to the type 
        return [param]
    }

    const result1 = createArray("Bangladesh")

    const resultGeneric = createArrayWithGeneric<boolean>(true)  // type of the input is given when the function is called 

    // **** if type is not given when the function is called, then it will take the type of the input automatically

    interface User{name:string; id:number; isActive:boolean}

    const resultGenericObject  = createArrayWithGeneric<User>({name:"jhon", isActive:false, id:1}) //ready made types can also be used 
    
    
    
    
    const createTupleWithGeneric = <T, Q>(param1:T, param2:Q): [T, Q]=>{ // creating a tuple taking two generic  'Types' 
        return [param1,  param2]
    }


    const resultGenericTuple = createTupleWithGeneric<string, boolean>("jhon", false)

    interface User{name:string; id:number; isActive:boolean}

    const resultGenericTupleObject  = createTupleWithGeneric<User, boolean>({name:"jhon", isActive:false, id:1}, true) 




    const addCourseToStudent = <T>(student: T): T & {course:string} =>{
        const course = "Next level web development"
        return {
            ...student,
            course
        }
    }
    
    const student1 = addCourseToStudent<{name:string; id:number}>({name:"jhon", id:0,})

}