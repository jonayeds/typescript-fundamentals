{

    interface Developer<t, b=null>{ //generic type interface which takes t as parameter 
        name: string;
        computer :{
            brand:string;
            model:string;
            year:number;
        }
        smartWatch: t // t is used to type cast smartWatch 
        bike?: b  
    }
    interface SmartWatch{  // smart watch interface 
        brand: string;
        model:string;
        display:string
    }
    const poorDeveloper : Developer<SmartWatch, {brand:string; model:number}> = { // using the smart watch interface to use in generic Interface
        name:"john",
        computer:{
            brand:"lenovo",
            model:"lenovo",
            year:2020
        },
        smartWatch:{
            brand:"lenovo",
            model:"lenovo",
            display:"ips"
        },
        bike:{
            brand:"yamaha",
            model:2023
        }
        }
        interface SuperSmartWatch extends SmartWatch { hartTrack:boolean; sleepTrack: boolean}
    const richDeveloper : Developer<SuperSmartWatch> = {
        name:"rich dev",
        computer:{
            brand:"macbook",
            model:"m3",
            year:2023
        },
        smartWatch:{
            brand:"Apple watch",
            model:"xyz",
            display:"OLED",
            hartTrack:true,
            sleepTrack:true
        }
        }

}


