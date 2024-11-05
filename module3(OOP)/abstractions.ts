{


    interface Vehicle{ // template to implement on other classes 
        startEngine():void
        stopEngine():void
        // makeSound():void{  // error--> cannot implement anything in interface

        // }
        move():void
    }


    class Car implements Vehicle{ //implementing the interface
        startEngine(): void {
            console.log("Car is starting")
        }
        stopEngine(): void {
            console.log("Car is stopping")
        }
        move(): void {
            console.log("Car is moving")
        }
        test(){ //--> can add properties other than interface properties
            console.log("testing")
        }

    }

    const toyotaCar= new Car()
    // toyotaCar.move()


    abstract class Car2{ // abstract class--> only inherit from abstract class 
        startEngine(): void {
            console.log("Car is starting")
        }
        stopEngine(): void {
            console.log("Car is stopping")
        }
        abstract move(): void //abstract property can only used like a template 
    }

    class ToyotaCar extends Car2{
        move(): void {
            console.log("moving")
        }
    }


    // const honda = new Car2()  // error--> cannot create an object from abstract class  


















}