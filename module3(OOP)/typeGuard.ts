{

    type AlphaNumeric= (param1:string|number, param2:string|number)=> string|number

    const add : AlphaNumeric = (param1, param2)=>{
        if(typeof param1 == "number" && typeof param2 ==="number"){
            return param1+param2
        }
        return param1.toString()+ param2.toString()
    }

    const result1 = add(2,"2")
    console.log(result1)


    type NormalUser= {
        name:string,
    }
    type AdminUser={
        name:string;
        role:"admin"
    }
    const getUser = (user:NormalUser|AdminUser)=>{
        if("role" in user){ // in guard --> checks if the key is in the object or not         
            console.log("admin user")
        }else{
            console.log(user.name)
        }

    }

    getUser({name:"babul"})
    getUser({name:"babul", role:"admin"})













}