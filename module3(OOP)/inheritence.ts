{
    
    class Parent{
        constructor(public name:string, public age:number, public address:string){}
    }
    

    
    class Student extends Parent{ //extending class from parent
        constructor(name:string,age:number,address:string){
            super(name, age, address) //calling parent class constructor with parameter
        }
        getSleep(numOfHours:number){
            console.log(`${this.name} sleeps ${numOfHours} hours`)
        }
    }

    const student1 = new Student("Gorila", 20, "uganda")
    student1.getSleep(20)

    class Teacher extends Parent{
        constructor( name:string, age:number, address:string, public designation:string){
            super(name, age, address)
        }
        takeClass(numOfClass:number){
            console.log(`${this.name} takes ${numOfClass} classes`)
        }
    
    }

    const teacher =new Teacher("jhon",55,"Uganda", "Assistance") 
    teacher.takeClass(12)







}