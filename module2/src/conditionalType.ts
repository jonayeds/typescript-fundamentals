{

    // conditional  Type --> type  casting according to condition

    type A1= null;
    type B1 = undefined;
    type C1 = A1 extends null ? true: B1 extends undefined ? undefined: any //checks if A1 extends null--> A1 includes the value null or not

    type User = {
        bike:string;
        car: string;
        ship: string;
    }

    type CheckVehicle<U, T> = T extends keyof U ? true : false

    type CheckCar = CheckVehicle<User, "car">











}