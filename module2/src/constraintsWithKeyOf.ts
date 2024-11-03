{

    // when string literal of the keys of a type is needed

    type Vehicle ={ //keys --> bike, car, ship
        bike:string;
        car:string;
        ship:string
    }

    type Owner= "bike" | "car" | "ship"  //using literal type
    type Owner2 = keyof Vehicle // anyone of the keys of Vehicle are allowed

    const person1 : Owner = "car"  
    const person2 : Owner2 = "ship"  
    
    const user = {
        name:"X",
        age:0,
        address : "Dhaka"
    }

    user['name'] // same as --> user.name

    function getPropertyValue <X,Y extends keyof X  >(obj : X, key: Y){  // Y : any of the string literal of keyof the X object  
        return obj[key]
    }

    const car = {
        model:"Tesla",
        year:2023,
        color:"red"
    }
    getPropertyValue(car, "year")
    getPropertyValue(user, "address")




}