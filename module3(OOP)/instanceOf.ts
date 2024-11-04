{

    class Animal{
        constructor(public name:string, public species:string){}
        makeSound(){
            console.log("making sound")
        }
    }

    class Dog extends Animal{
        constructor(name:string, species:string){super(name,species)}
        makeBark(){
            console.log("im barking")
        }
    }
    class Cat extends Animal{
        constructor(name:string, species:string){super(name,species)}
        makeMew(){
            console.log("im mew mew")
        }
    }

    const isDog=(animal:Animal): animal is Dog=>{
        return animal instanceof Dog
    }
    const isCat=(animal:Animal): animal is Cat=>{
        return animal instanceof Cat
    }


    const getAnimal = (animal : Animal)=>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(animal instanceof Cat){
            animal.makeMew()
        }


    }

    const dog = new Dog("Doge bai","dog")
    const cat = new Cat("Billa bai","cat")

    console.log(dog instanceof Cat)  
    getAnimal(cat)      












}