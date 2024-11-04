{


    class Counter{
        static count:number = 0
        static increment(){
            // return this.count+=1 //error--> static property cannot be used by this
            return Counter.count++
        }
        static decrement(){
            return Counter.count--
            // return this.count-=1 //error--> static property cannot be used by this
        }
        get count(){
            return Counter.count
        }
    }

    const instance1 = new Counter()
    // console.log(instance1.increment()) //different  memory space if the property is not static
    console.log(Counter.decrement())
    const instance2 = new Counter()
    // console.log(instance2.decrement()) //different memory space if the property is not static
    console.log(Counter.increment()) //different memory space if the property is not static










}