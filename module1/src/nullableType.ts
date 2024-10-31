{

    const searchName = (value : string | null )=>{
        if(value) console.log("Searching");
        else console.log("Nothing to search");
    }

    searchName(null)

    const getSpeedInMeterPerSecond = (value: unknown)=>{ // unknown type 
        if(typeof value == "number"){ // checking type in runtime
            const convertedSpeed = (value * 1000)/3600
            console.log(`the speed is ${convertedSpeed}`)
        }
        if(typeof value == "string"){
            const [speed, unit] = value.split(" ") 
            const convertedSpeed = (parseFloat(speed) * 1000)/3600
            console.log(`the speed is ${convertedSpeed}`)
        }
    } 
    getSpeedInMeterPerSecond(null)

    const  throwError =  (message: string) : never=>{ // never type
        throw new Error(message)
    }

    // console.log(typeof throwError)
    // throwError("Error")



}