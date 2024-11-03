{

    // utility types
    

    type Person={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }
    type NameAge=Pick<Person,"name" | "age">  //pick --> picking a specific type from a Object type

    type  ContactInfo  = Omit<Person, "name"|"age"> //Omit --> setting type excluded chosen type
    
    type PersonRequired = Required<Person>  //Require --> Makes every element in the chosen type required

    type PersonPartial = Partial<Person> //Partial --> Makes every element in the chosen type optional

    type PersonReadonly = Readonly<Person> //Readonly --> Makes every element in the chosen type readonly

    const person:PersonReadonly = {
        name:"John",
        age:30,
        contactNo:"000000000000"
    }
    //person.name = "Jane" //-->error

    // type MyObj ={
    //     a:string;
    //     b:string;
    // }

    type MyObj = Record<string,string> //Record --> Record string type for each key in the object

    const obj:MyObj = {
        a:"1",
        b:"2",
        c:"3"
        // d:2 //-->error
    }








}