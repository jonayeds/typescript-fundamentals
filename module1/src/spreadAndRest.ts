{
    const bros1: string[] = ["bro1", "bro2", "bro3"]
    const bros2: string[]= ["bro4", "bro5", "bro6"]
    bros1.push(...bros2)
    
    const mentors1 = {
        typscript : "mezba",
        redux: "mir",
        dbms: "toufiq"
    }
    const mentors2 = {
        prisma:"firoz",
        nextjs: "tonmoy",
        cloud: "nahid"
    }

    const mentorList = { // adding two objects through destructuring
        ...mentors1, 
        ...mentors2 
    }

    const greetFriends = (...friends:string[] )=>{ // rest operator--->takes many data-type into a singe non primitive data-type  (...parameter : data-type ) 
        friends.forEach((friend: string)=> console.log(`say hi ${friend}`))
    }

    greetFriends("abul", "babul", "kabul")



}