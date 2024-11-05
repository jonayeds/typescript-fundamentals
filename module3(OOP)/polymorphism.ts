{


    class Person{
        getSleep(){
            console.log("im sleeping for 8 hours per day")
        }

    }
    class Student extends Person{
        getSleep(){
            console.log("im sleeping for 4 hours per day")
        }

    }
    class Developer extends Person{
        getSleep(){
            console.log("im sleeping for 2 hours per day")
        }

    }

    const getSleepingHours=(param:Person)=>{
        param.getSleep()
    }
    const person1 = new Person()
    const student = new Student()
    const developer= new Developer()

    getSleepingHours(person1)
    
    class Shape{
        getArea():number{
            return 0
        }
    }
    class Circle extends Shape{
        radius:number;
        constructor(radius:number){
            super()   //Have to call super first in constructor
            this.radius=radius
        }
        getArea(): number {
            return (this.radius*3.1416*2)
        }
    }
    class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(height:number,width:number){
            super()   //Have to call super first in constructor
            this.height=height
            this.width=width
        }
        getArea(): number {
            return (this.height*this.width)
        }
    }
    const getShapeArea = (param:Shape)=>{
        console.log(param.getArea())
    }
    const shape1 = new Shape()
    const circle = new Circle(10)
    const rectangle = new Rectangle(5,2)
    getShapeArea(circle)
    getShapeArea(rectangle)
    getShapeArea(shape1)















}