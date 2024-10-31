"use strict";
{
    const bros1 = ["bro1", "bro2", "bro3"];
    const bros2 = ["bro4", "bro5", "bro6"];
    bros1.push(...bros2);
    const mentors1 = {
        typscript: "mezba",
        redux: "mir",
        dbms: "toufiq"
    };
    const mentors2 = {
        prisma: "firoz",
        nextjs: "tonmoy",
        cloud: "nahid"
    };
    const mentorList = {
        ...mentors1,
        ...mentors2
    };
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`say hi ${friend}`));
    };
    greetFriends("abul", "babul", "kabul");
}
