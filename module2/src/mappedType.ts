{


    const arrOfNumbers :number[] = [1,4,5,7]
    const arrOfStrings: string[] = arrOfNumbers.map(number=> number.toString())

    console.log(arrOfStrings)

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"]

    type AreaString<T> ={
        [key in keyof T]: T[key]  //looping through keys in the object received Type and setting each value to what the parameter has 
    }

    const area1: AreaString<{height:string; width:number}> = {
        width: 50,
        height:"100",
    }
    









}