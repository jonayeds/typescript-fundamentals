{

    //constraints --> forcing a property as must included

    const addCourseToStudent = <T extends {name:string; id:number}>(student: T ): T & {course:string} =>{ // extending from the value that must be included
        const course = "Next level web development"
        return {
            ...student,
            course
        }
    }
    
    const student1 = addCourseToStudent<{name:string; id:number, developmentLang: string}>({name:"jhon", id:0, developmentLang:"Java"})
    const student2 = addCourseToStudent<{name:string; id:number, isFaculty: boolean}>({name:"jane", id:0, isFaculty:true})
    const student3 = addCourseToStudent<{emni: string, name:string; id:number}>({emni:"emni", name:"emni Student", id:3})







}