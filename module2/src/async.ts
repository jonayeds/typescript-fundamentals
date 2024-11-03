{



    const createPromise=():Promise<string>=>{
        return new Promise<string>((resolve, reject)=>{
            const data:string= "something";
            if(data){
                resolve(data)
            }else{
                reject("failed to load data")
            }
        })
    }

    const showData= async():Promise<string>=>{
        const data:string =await createPromise()
        return data
    }

    showData()

    

    // fetching  data from server
    interface Users{
        id:number;
        name:string;
        username:string;
        email:string;
        address:{
            street:string;
            suite:string;
            city:string;
            zipcode:string;
            geo:{
                lat:string;
                lng:string;
            };
            phone:string;
            website:string;
            company:{
                name:string;
                catchPhrase:string;
                bs:string;
            };
        }
    }
const getUsers  = async(): Promise<Users>=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
}

getUsers()








}