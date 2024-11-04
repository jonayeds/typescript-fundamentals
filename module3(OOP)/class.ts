{

    class  Animal{
        // name:string;  //properties of the class
        // species:string;
        // sound:string;
        constructor(public name:string, public species:string, public sound:string){  //access modifier in constructor parameter means it automatically declares properties with the same name
            // this.name=name;
            // this.sound = sound;
            // this.species= species; // **don't need to initialize in this case
        }

        makeSound(){
            console.log(`the ${this.name} sounds like ${this.sound}`)
        }

    }

    const dog  =new Animal("dog", "syberean","bhaw") //object declaration from the class
    dog.makeSound()









}