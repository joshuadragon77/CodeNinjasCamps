"use strict";
class Camp {
    constructor(name, campLink, startDate, endDate, campState, extraStyles = "Normal") {
        this.startingTime = new Date();
        this.endingTime = new Date();
        this.name = name;
        this.campLink = campLink;
        this.startDate = startDate;
        this.endDate = endDate;
        this.campState = campState;
        this.extraStyles = extraStyles;
    }
}
let rawCampData = [
    {
        CampName: "Roblox Game Development Club June 2023 - Every Monday (6:45 PM - 7:45 PM)",
        CampStartTime: "Mon, Jun 5, 2023 6:45 PM",
        CampEndTime: "Mon, Jun 26, 2023 7:45 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65804//1686590305",
        RecommendedAge: ""
    },
    {
        CampName: "Chess Club June 2023 - Every Tuesday (6:45 PM - 7:45 PM)",
        CampStartTime: "Tue, Jun 6, 2023 6:45 PM",
        CampEndTime: "Tue, Jun 27, 2023 7:45 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65802//1686590305",
        RecommendedAge: ""
    },
    {
        CampName: "Robotics Club June 2023 - Every Wednesday (6:45 PM - 7:45 PM)",
        CampStartTime: "Wed, Jun 7, 2023 6:45 PM",
        CampEndTime: "Wed, Jun 28, 2023 7:45 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65805//1686590305",
        RecommendedAge: ""
    },
    {
        CampName: "Minecraft Game Development Club June 2023 - Every Thursday (6:45 PM - 7:45 PM)",
        CampStartTime: "Thu, Jun 8, 2023 6:45 PM",
        CampEndTime: "Thu, Jun 29, 2023 7:45 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65809//1686590305",
        RecommendedAge: ""
    },
    {
        CampName: "Python Game Development Club June 2023 - Every Friday (6:45 PM - 7:45 PM)",
        CampStartTime: "Fri, Jun 9, 2023 6:45 PM",
        CampEndTime: "Fri, Jun 30, 2023 7:45 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65803//1686590305",
        RecommendedAge: ""
    },
    {
        CampName: "Junior Creators Camp",
        CampStartTime: "Fri, Jun 30, 2023 09:00 AM",
        CampEndTime: "Fri, Jun 30, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65996//1686590311",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Junior Robotics Camp",
        CampStartTime: "Mon, Jul 24, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 28, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64678//1686590311",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Minecraft Day camp",
        CampStartTime: "Fri, Jun 30, 2023 09:00 AM",
        CampEndTime: "Fri, Jun 30, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/65995//1686590315",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (3D Printing, YouTuber, Composing with Code)",
        CampStartTime: "Mon, Jul 3, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 7, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64551//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Roblox, Microcontrollers, Minecraft, Robotics)",
        CampStartTime: "Mon, Jul 10, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 14, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64552//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Minecraft, Makey Makey, Animation, Code Breakers)",
        CampStartTime: "Mon, Jul 17, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 21, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64553//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (YouTuber, Roblox - Advanced, Minecraft, Robotics)",
        CampStartTime: "Mon, Jul 24, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 28, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64554//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Python, Makey Makey, Minecraft, Roblox)",
        CampStartTime: "Mon, Jul 31, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 4, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64555//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Code Breakers, 3D Printing, Robotics)",
        CampStartTime: "Tue, Aug 8, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 11, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64556//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Composing with Code, YouTuber, Roblox - Advanced, Makey Makey)",
        CampStartTime: "Mon, Aug 14, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 18, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64557//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Robotics, Makey Makey, 3D Printing, Roblox)",
        CampStartTime: "Mon, Aug 21, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 25, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64559//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Full-Day Full-Week Camp (Roblox, Minecraft, Code Breaker, Makey Makey)",
        CampStartTime: "Mon, Aug 28, 2023 09:00 AM",
        CampEndTime: "Wed, Aug 30, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/64558//1686590318",
        RecommendedAge: "8+"
    },
    {
        CampName: "Junior STEM Discoveries Camp",
        CampStartTime: "Mon, Jul 3, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 7, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57199//1686590327",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Junior STEM Discoveries Camp",
        CampStartTime: "Mon, Jul 24, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 28, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57484//1686590327",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Junior STEM Discoveries Camp",
        CampStartTime: "Tue, Aug 8, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 11, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57932//1686590327",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Junior Adventures in Game design",
        CampStartTime: "Mon, Jul 31, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 4, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57927//1686590332",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Junior Adventures in Game design",
        CampStartTime: "Mon, Aug 21, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 25, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57947//1686590332",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Jr Inventors with Makey Makey camp",
        CampStartTime: "Mon, Jul 17, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 21, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57400//1686590335",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Jr Inventors with Makey Makey camp",
        CampStartTime: "Mon, Aug 14, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 18, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57942//1686590335",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Jr Inventors with Makey Makey camp",
        CampStartTime: "Mon, Aug 28, 2023 09:00 AM",
        CampEndTime: "Wed, Aug 30, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57953//1686590335",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Jr Makers with Microcontrollers Camp",
        CampStartTime: "Mon, Jul 10, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 14, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57357//1686590340",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Jr Makers with Microcontrollers Camp",
        CampStartTime: "Tue, Aug 8, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 11, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57933//1686590340",
        RecommendedAge: "5-7"
    },
    {
        CampName: "Makers with Microcontrollers Camp",
        CampStartTime: "Mon, Jul 10, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 14, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57360//1686590343",
        RecommendedAge: "8+"
    },
    {
        CampName: "Create and Compete Camp",
        CampStartTime: "Mon, Jul 17, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 21, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57450//1686590346",
        RecommendedAge: "8+"
    },
    {
        CampName: "Create and Compete Camp",
        CampStartTime: "Mon, Aug 14, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 18, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57943//1686590346",
        RecommendedAge: "8+"
    },
    {
        CampName: "Create and Compete Camp",
        CampStartTime: "Mon, Aug 28, 2023 09:00 AM",
        CampEndTime: "Wed, Aug 30, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57954//1686590346",
        RecommendedAge: "8+"
    },
    {
        CampName: "Modding with Minecraft Camp",
        CampStartTime: "Mon, Jul 10, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 14, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/59129//1686590351",
        RecommendedAge: "8+"
    },
    {
        CampName: "Modding with Minecraft Camp",
        CampStartTime: "Mon, Jul 24, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 28, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57490//1686590351",
        RecommendedAge: "8+"
    },
    {
        CampName: "Modding with Minecraft Camp",
        CampStartTime: "Mon, Aug 28, 2023 09:00 AM",
        CampEndTime: "Wed, Aug 30, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57952//1686590351",
        RecommendedAge: "8+"
    },
    {
        CampName: "Stop Motion Animation Camp",
        CampStartTime: "Mon, Jul 17, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 21, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57377//1686590355",
        RecommendedAge: "8+"
    },
    {
        CampName: "Become a YouTuber Camp",
        CampStartTime: "Mon, Jul 3, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 7, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57223//1686590358",
        RecommendedAge: "8+"
    },
    {
        CampName: "Become a YouTuber Camp",
        CampStartTime: "Mon, Jul 24, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 28, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57924//1686590358",
        RecommendedAge: "8+"
    },
    {
        CampName: "Become a YouTuber Camp",
        CampStartTime: "Mon, Aug 14, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 18, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57941//1686590358",
        RecommendedAge: "8+"
    },
    {
        CampName: "Makey Makey Full-week camp",
        CampStartTime: "Mon, Jul 31, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 4, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/59130//1686590362",
        RecommendedAge: "8+"
    },
    {
        CampName: "Makey Makey Full-week camp",
        CampStartTime: "Mon, Aug 21, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 25, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/59131//1686590362",
        RecommendedAge: "8+"
    },
    {
        CampName: "Intro to Roblox Development camp",
        CampStartTime: "Mon, Jul 10, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 14, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57362//1686590366",
        RecommendedAge: "8+"
    },
    {
        CampName: "Intro to Roblox Development camp",
        CampStartTime: "Mon, Jul 31, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 4, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57926//1686590366",
        RecommendedAge: "8+"
    },
    {
        CampName: "Intro to Roblox Development camp",
        CampStartTime: "Mon, Aug 21, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 25, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57945//1686590366",
        RecommendedAge: "8+"
    },
    {
        CampName: "Intro to Roblox Development camp",
        CampStartTime: "Mon, Aug 28, 2023 1:00 PM",
        CampEndTime: "Wed, Aug 30, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57946//1686590366",
        RecommendedAge: "8+"
    },
    {
        CampName: "3D Design and Print Camp",
        CampStartTime: "Mon, Jul 3, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 7, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57197//1686590371",
        RecommendedAge: "8+"
    },
    {
        CampName: "3D Design and Print Camp",
        CampStartTime: "Tue, Aug 8, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 11, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57925//1686590371",
        RecommendedAge: "8+"
    },
    {
        CampName: "3D Design and Print Camp",
        CampStartTime: "Mon, Aug 21, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 25, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57944//1686590371",
        RecommendedAge: "8+"
    },
    {
        CampName: "Code your own Robot in Minecraft camp",
        CampStartTime: "Mon, Jul 17, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 21, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57444//1686590376",
        RecommendedAge: "8+"
    },
    {
        CampName: "Code your own Robot in Minecraft camp",
        CampStartTime: "Mon, Jul 31, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 4, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57930//1686590376",
        RecommendedAge: "8+"
    },
    {
        CampName: "LEGO Robotics Camp",
        CampStartTime: "Mon, Jul 10, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 14, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57365//1686590380",
        RecommendedAge: "8+"
    },
    {
        CampName: "LEGO Robotics Camp",
        CampStartTime: "Mon, Jul 24, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 28, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57923//1686590380",
        RecommendedAge: "8+"
    },
    {
        CampName: "LEGO Robotics Camp",
        CampStartTime: "Tue, Aug 8, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 11, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/59132//1686590380",
        RecommendedAge: "8+"
    },
    {
        CampName: "LEGO Robotics Camp",
        CampStartTime: "Mon, Aug 21, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 25, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57949//1686590380",
        RecommendedAge: "8+"
    },
    {
        CampName: "LEGO Python Engineers Camp",
        CampStartTime: "Mon, Jul 10, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 14, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57376//1686590385",
        RecommendedAge: "10+"
    },
    {
        CampName: "LEGO Python Engineers Camp",
        CampStartTime: "Tue, Aug 8, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 11, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57938//1686590385",
        RecommendedAge: "10+"
    },
    {
        CampName: "LEGO Python Engineers Camp",
        CampStartTime: "Mon, Aug 21, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 25, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57951//1686590385",
        RecommendedAge: "10+"
    },
    {
        CampName: "Operation: Code Breakers Camp",
        CampStartTime: "Mon, Jul 17, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 21, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57448//1686590389",
        RecommendedAge: "10+"
    },
    {
        CampName: "Operation: Code Breakers Camp",
        CampStartTime: "Tue, Aug 8, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 11, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57936//1686590389",
        RecommendedAge: "10+"
    },
    {
        CampName: "Operation: Code Breakers Camp",
        CampStartTime: "Mon, Aug 28, 2023 1:00 PM",
        CampEndTime: "Wed, Aug 30, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57955//1686590389",
        RecommendedAge: "10+"
    },
    {
        CampName: "Composing with Code Camp",
        CampStartTime: "Mon, Jul 3, 2023 1:00 PM",
        CampEndTime: "Fri, Jul 7, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57356//1686590394",
        RecommendedAge: "11+"
    },
    {
        CampName: "Composing with Code Camp",
        CampStartTime: "Mon, Aug 14, 2023 09:00 AM",
        CampEndTime: "Fri, Aug 18, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57939//1686590394",
        RecommendedAge: "11+"
    },
    {
        CampName: "Program and Play in Python Camp",
        CampStartTime: "Mon, Jul 31, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 4, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57931//1686590398",
        RecommendedAge: "11+"
    },
    {
        CampName: "Next Level Roblox Development Camp",
        CampStartTime: "Mon, Jul 24, 2023 09:00 AM",
        CampEndTime: "Fri, Jul 28, 2023 12:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57491//1686590401",
        RecommendedAge: "11+"
    },
    {
        CampName: "Next Level Roblox Development Camp",
        CampStartTime: "Mon, Aug 14, 2023 1:00 PM",
        CampEndTime: "Fri, Aug 18, 2023 4:00 PM",
        CampLink: "https://members.codeninjas.com/e/?=CNWestSprings/55/57940//1686590401",
        RecommendedAge: "11+"
    }
];
{
    let campSpecificEvents = [];
    for (let camp of rawCampData) {
        let startDate = (() => {
            let date = new Date(camp.CampStartTime);
            return {
                Month: date.getMonth(),
                Day: date.getDate(),
            };
        })();
        let endDate = (() => {
            let date = new Date(camp.CampEndTime);
            return {
                Month: date.getMonth(),
                Day: date.getDate(),
            };
        })();
        if (endDate.Month == 5) {
            continue;
        }
        let matchingWeekEvents = campSpecificEvents.find(va => {
            return (startDate.Month == va.StartDate.Month && startDate.Day == va.StartDate.Day) && (endDate.Month == va.EndDate.Month && endDate.Day == va.EndDate.Day);
        });
        if (matchingWeekEvents == null) {
            matchingWeekEvents = {
                StartDate: startDate,
                EndDate: endDate,
                MorningCamps: [],
                AfternoonCamps: [],
                AllDayCamps: []
            };
            campSpecificEvents.push(matchingWeekEvents);
        }
        let startTime = new Date(camp.CampStartTime);
        let endTime = new Date(camp.CampEndTime);
        if (startTime.getHours() <= 11) {
            if (endTime.getHours() >= 14) {
                matchingWeekEvents.AllDayCamps.push(camp);
            }
            else
                matchingWeekEvents.MorningCamps.push(camp);
        }
        else {
            matchingWeekEvents.AfternoonCamps.push(camp);
        }
    }
    campSpecificEvents.sort((va1, va2) => {
        return va1.StartDate.Month * 31 - va2.StartDate.Month * 31 + (va1.StartDate.Day - va2.StartDate.Day);
    });
    let thead = document.querySelector("thead tr");
    let trow1 = document.querySelector("tbody tr:nth-child(1)");
    let trow2 = document.querySelector("tbody tr:nth-child(2)");
    let trow3 = document.querySelector("tbody tr:nth-child(3)");
    for (let campSpecificEvent of campSpecificEvents) {
        let head = document.createElement("td");
        let calendarLookup = {
            6: "July",
            7: "August"
        };
        if (campSpecificEvent.StartDate.Month == campSpecificEvent.EndDate.Month) {
            head.innerText = `${calendarLookup[campSpecificEvent.StartDate.Month]} ${campSpecificEvent.StartDate.Day} - ${campSpecificEvent.EndDate.Day}`;
        }
        else {
            head.innerText = `${calendarLookup[campSpecificEvent.StartDate.Month]} ${campSpecificEvent.StartDate.Day} - ${calendarLookup[campSpecificEvent.EndDate.Month]} ${campSpecificEvent.EndDate.Day}`;
        }
        thead.appendChild(head);
        {
            let data = document.createElement("td");
            campSpecificEvent.MorningCamps.sort((a, b) => {
                return a.CampName.localeCompare(b.CampName);
            });
            for (let camp of campSpecificEvent.MorningCamps) {
                data.innerHTML += `<a href="${camp.CampLink}">${camp.CampName}<br>(Ages: ${camp.RecommendedAge})</a>`;
            }
            trow1.appendChild(data);
        }
        {
            let data = document.createElement("td");
            campSpecificEvent.AfternoonCamps.sort((a, b) => {
                return a.CampName.localeCompare(b.CampName);
            });
            for (let camp of campSpecificEvent.AfternoonCamps) {
                data.innerHTML += `<a href="${camp.CampLink}">${camp.CampName}<br>(Ages: ${camp.RecommendedAge})</a>`;
            }
            trow2.appendChild(data);
        }
        {
            let data = document.createElement("td");
            campSpecificEvent.AllDayCamps.sort((a, b) => {
                return a.CampName.localeCompare(b.CampName);
            });
            for (let camp of campSpecificEvent.AllDayCamps) {
                data.innerHTML += `<a href="${camp.CampLink}">${camp.CampName}<br>(Ages: ${camp.RecommendedAge})</a>`;
            }
            trow3.appendChild(data);
        }
    }
}
let html = document.querySelector("html");
window.addEventListener("wheel", (event) => {
    html.scrollLeft += event.deltaY;
    console.log(event.deltaY);
});
