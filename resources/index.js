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
function setUpCalendar(calendarElement, camps, startingDay, endDate) {
    let tableBody = calendarElement.querySelector("tbody");
    let physicsBody = [];
    let colorsWeek = [];
    for (let i = 0; i < endDate; i++) {
        physicsBody.push([]);
    }
    let startingDateIndex = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
    }[startingDay];
    let totalDateIndex = startingDateIndex + endDate;
    let totalWeeks = Math.ceil(totalDateIndex / 7);
    let dataAssignmentTable = [];
    for (let i = 0; i < totalWeeks; i++) {
        colorsWeek.push([
            "rgb(0, 255, 255)",
            "rgb(255, 0, 127)",
            "rgb(0, 255, 127)",
            "rgb(255, 127, 0)",
            "rgb(255, 65, 255)",
            "rgb(240, 255, 0)",
            "rgb(186, 236, 212)"
        ]);
        let tableRow = document.createElement("tr");
        for (let r = 0; r < Math.max(7, 0); r++) {
            let tableDataElement = document.createElement("td");
            tableRow.appendChild(tableDataElement);
            let currentDate = r + i * 7 - startingDateIndex;
            if (currentDate < endDate && currentDate >= 0) {
                let dateElement = document.createElement("div");
                dateElement.className = "Date";
                dateElement.innerText = `${currentDate + 1}`;
                tableDataElement.appendChild(dateElement);
                dataAssignmentTable.push(tableDataElement);
            }
        }
        tableBody.appendChild(tableRow);
    }
    function weekNumberFromDay(date) {
        return Math.floor((date + startingDateIndex) / 7);
    }
    for (let camp of camps) {
        let campDuration = Math.floor((camp.endDate.getTime() - camp.startDate.getTime()) / 1000 / 86400);
        let startingDateIndex = camp.startDate.getDate() - 1;
        let colorCode = colorsWeek[weekNumberFromDay(startingDateIndex)].shift();
        let currentLevelPosition = 0;
        while (true) {
            let interrupted = false;
            for (let i = 0; i <= campDuration; i++) {
                if (physicsBody[startingDateIndex + i][currentLevelPosition]) {
                    interrupted = true;
                    break;
                }
            }
            if (interrupted == false) {
                break;
            }
            else {
                currentLevelPosition += 1;
            }
        }
        function attemptToPileChild(child, selectedDateIndex) {
            let emptySpaces = currentLevelPosition - physicsBody[selectedDateIndex].length;
            for (let i = 0; i < emptySpaces; i++) {
                physicsBody[selectedDateIndex].push(null);
            }
            physicsBody[selectedDateIndex][currentLevelPosition] = child;
        }
        if (campDuration > 1) {
            let startingCard = document.createElement("a");
            startingCard.innerText = camp.name;
            startingCard.href = camp.campLink;
            startingCard.title = camp.name;
            startingCard.style.backgroundColor = colorCode;
            if (startingDateIndex == 0 && camp.extraStyles == "Cut") {
                startingCard.className = `Camp`;
            }
            else {
                startingCard.className = `Camp First`;
            }
            attemptToPileChild(startingCard, startingDateIndex);
            for (let i = 1; i < campDuration; i++) {
                let card = document.createElement("a");
                card.className = `Camp`;
                card.innerText = camp.name;
                card.title = camp.name;
                card.href = camp.campLink;
                card.style.backgroundColor = colorCode;
                attemptToPileChild(card, startingDateIndex + i);
            }
            let endingCard = document.createElement("a");
            endingCard.innerText = camp.name;
            endingCard.title = camp.name;
            endingCard.href = camp.campLink;
            endingCard.style.backgroundColor = colorCode;
            if (startingDateIndex + campDuration == endDate - 1 && camp.extraStyles == "Cut") {
                endingCard.className = `Camp`;
            }
            else {
                endingCard.className = `Camp Last`;
            }
            attemptToPileChild(endingCard, startingDateIndex + campDuration);
        }
        else {
            let card = document.createElement("a");
            if (startingDateIndex + campDuration == endDate - 1 && camp.extraStyles == "Cut") {
                card.className = `Camp First`;
            }
            else
                card.className = `Camp Middle`;
            card.innerText = camp.name;
            card.title = camp.name;
            card.href = camp.campLink;
            card.style.backgroundColor = colorCode;
            attemptToPileChild(card, startingDateIndex);
        }
    }
    for (let i = 0; i < physicsBody.length; i++) {
        let physicsColumn = physicsBody[i];
        for (let r = 0; r < physicsColumn.length; r++) {
            let element = physicsColumn[r];
            if (element) {
                dataAssignmentTable[i].appendChild(element);
            }
            else {
                let spaceElement = document.createElement("div");
                spaceElement.className = "Space";
                dataAssignmentTable[i].appendChild(spaceElement);
            }
        }
    }
}
let rawCampData = [
    {
        CampName: 'Roblox Game Development Club June 2023 - Every Monday (6:45 PM - 7:45 PM)',
        CampStartTime: 'Mon, Jun 5, 2023   6:45 PM',
        CampEndTime: 'Mon, Jun 26, 2023   7:45 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65804//1686337942'
    },
    {
        CampName: 'Chess Club June 2023 - Every Tuesday (6:45 PM - 7:45 PM)',
        CampStartTime: 'Tue, Jun 6, 2023   6:45 PM',
        CampEndTime: 'Tue, Jun 27, 2023   7:45 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65802//1686337942'
    },
    {
        CampName: 'Robotics Club June 2023 - Every Wednesday (6:45 PM - 7:45 PM)',
        CampStartTime: 'Wed, Jun 7, 2023   6:45 PM',
        CampEndTime: 'Wed, Jun 28, 2023   7:45 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65805//1686337942'
    },
    {
        CampName: 'Minecraft Game Development Club June 2023 - Every Thursday (6:45 PM - 7:45 PM)',
        CampStartTime: 'Thu, Jun 8, 2023   6:45 PM',
        CampEndTime: 'Thu, Jun 29, 2023   7:45 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65809//1686337942'
    },
    {
        CampName: 'Python Game Development Club June 2023 - Every Friday (6:45 PM - 7:45 PM)',
        CampStartTime: 'Fri, Jun 9, 2023   6:45 PM',
        CampEndTime: 'Fri, Jun 30, 2023   7:45 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65803//1686337942'
    },
    {
        CampName: 'Junior Creators Camp at Code Ninjas West Springs, Calgary from June 9 (9:00 AM - 4:00 PM)',
        CampStartTime: 'Fri, Jun 9, 2023   09:00 AM',
        CampEndTime: 'Fri, Jun 9, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65993//1686337948'
    },
    {
        CampName: 'Junior Creators Camp at Code Ninjas West Springs, Calgary from June 30 (9:00 AM - 4:00 PM)',
        CampStartTime: 'Fri, Jun 30, 2023   09:00 AM',
        CampEndTime: 'Fri, Jun 30, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65996//1686337948'
    },
    {
        CampName: 'Junior Robotics Camp at Code Ninjas West Springs, Calgary from July 24-28 (9:00 AM - 12:00 PM)',
        CampStartTime: 'Mon, Jul 24, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 28, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64678//1686337948'
    },
    {
        CampName: '3D Printing Day Camp at Code Ninjas West Springs, Calgary (June 9, 9:00 AM - 4:00 PM)',
        CampStartTime: 'Fri, Jun 9, 2023   09:00 AM',
        CampEndTime: 'Fri, Jun 9, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65992//1686337952'
    },
    {
        CampName: 'Minecraft Day camp at Code Ninjas West Springs Calgary (June 30, 9AM - 4PM)',
        CampStartTime: 'Fri, Jun 30, 2023   09:00 AM',
        CampEndTime: 'Fri, Jun 30, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/65995//1686337955'
    },
    {
        CampName: 'Full-Day Full-Week Camp (3D Printing, YouTuber, Composing with Code) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Jul 3, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 7, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64551//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Roblox, Microcontrollers, Minecraft, Robotics) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Jul 10, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 14, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64552//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Minecraft, Makey Makey, Animation, Code Breakers) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Jul 17, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 21, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64553//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (YouTuber, Roblox - Advanced, Minecraft, Robotics) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Jul 24, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 28, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64554//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Python, Makey Makey, Minecraft, Roblox) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Jul 31, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 4, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64555//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Code Breakers, 3D Printing, Robotics) - At Code Ninjas West Springs',
        CampStartTime: 'Tue, Aug 8, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 11, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64556//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Composing with Code, YouTuber, Roblox - Advanced, Makey Makey) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Aug 14, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 18, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64557//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Robotics, Makey Makey, 3D Printing, Roblox) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Aug 21, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 25, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64559//1686337958'
    },
    {
        CampName: 'Full-Day Full-Week Camp (Roblox, Minecraft, Code Breaker, Makey Makey) - At Code Ninjas West Springs',
        CampStartTime: 'Mon, Aug 28, 2023   09:00 AM',
        CampEndTime: 'Wed, Aug 30, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/64558//1686337958'
    },
    {
        CampName: 'Junior STEM Discoveries Camp at Code Ninjas West Springs, Calgary from 3 July to 7 July, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 3, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 7, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57199//1686337967'
    },
    {
        CampName: 'Junior STEM Discoveries Camp at Code Ninjas West Springs, Calgary from 24 July to 28 July, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 24, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 28, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57484//1686337967'
    },
    {
        CampName: 'Junior STEM Discoveries Camp at Code Ninjas West Springs, Calgary from 8 Aug to 11 Aug, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 11, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57932//1686337967'
    },
    {
        CampName: 'Junior Adventures in Game design at Code Ninjas West Springs Calgary (July 31 - Aug 4, 9:00 AM - 12:00 PM everyday)',
        CampStartTime: 'Mon, Jul 31, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 4, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57927//1686337972'
    },
    {
        CampName: 'Junior Adventures in Game design at Code Ninjas West Springs Calgary (Aug 21 - Aug 25, 9:00 AM - 12:00 PM everyday)',
        CampStartTime: 'Mon, Aug 21, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 25, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57947//1686337972'
    },
    {
        CampName: 'Jr Inventors with Makey Makey camp at Code Ninjas West Springs Calgary (July 17 - July 21, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 17, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 21, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57400//1686337975'
    },
    {
        CampName: 'Jr Inventors with Makey Makey camp at Code Ninjas West Springs Calgary (Aug 14 - Aug 18, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 14, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 18, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57942//1686337975'
    },
    {
        CampName: 'Jr Inventors with Makey Makey camp at Code Ninjas West Springs Calgary (Aug 28 - Aug 30, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 28, 2023   09:00 AM',
        CampEndTime: 'Wed, Aug 30, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57953//1686337975'
    },
    {
        CampName: 'Jr Makers with Microcontrollers Camp at Code Ninjas West Springs (July 10 - July 14, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 14, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57357//1686337980'
    },
    {
        CampName: 'Jr Makers with Microcontrollers Camp at Code Ninjas West Springs (Aug 8 - Aug 11, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 11, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57933//1686337980'
    },
    {
        CampName: 'Makers with Microcontrollers Camp at Code Ninjas West Springs (July 10 - July 14, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 14, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57360//1686337984'
    },
    {
        CampName: 'Create and Compete Camp at Code Ninjas West Springs (July 17 - July 21, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 17, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 21, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57450//1686337986'
    },
    {
        CampName: 'Create and Compete Camp at Code Ninjas West Springs (Aug 14 - Aug 18, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 14, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 18, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57943//1686337986'
    },
    {
        CampName: 'Create and Compete Camp at Code Ninjas West Springs (Aug 28 - Aug 30, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 28, 2023   09:00 AM',
        CampEndTime: 'Wed, Aug 30, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57954//1686337986'
    },
    {
        CampName: 'Modding with Minecraft Camp at Code Ninjas West Springs, Calgary from 10 July to 14 July, 2023 (1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 14, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/59129//1686337991'
    },
    {
        CampName: 'Modding with Minecraft Camp at Code Ninjas West Springs, Calgary from 24 July to 28 July, 2023 (1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 24, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 28, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57490//1686337991'
    },
    {
        CampName: 'Modding with Minecraft Camp at Code Ninjas West Springs, Calgary from 28 Aug to 30 Aug, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 28, 2023   09:00 AM',
        CampEndTime: 'Wed, Aug 30, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57952//1686337991'
    },
    {
        CampName: 'Stop Motion Animation Camp at Code Ninjas West Springs Calgary (July 17 - July 21, 1 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 17, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 21, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57377//1686337995'
    },
    {
        CampName: 'Become a YouTuber Camp at Code Ninjas West Springs Calgary (July 3 - July 7, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 3, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 7, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57223//1686337998'
    },
    {
        CampName: 'Become a YouTuber Camp at Code Ninjas West Springs Calgary (July 24 - July 28, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 24, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 28, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57924//1686337998'
    },
    {
        CampName: 'Become a YouTuber Camp at Code Ninjas West Springs Calgary (Aug 14 - Aug 18, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 14, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 18, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57941//1686337998'
    },
    {
        CampName: 'Makey Makey Full-week camp at Code Ninjas West Springs, Calgary (from 31 July to 4 Aug, 2023, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 31, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 4, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/59130//1686338003'
    },
    {
        CampName: 'Makey Makey Full-week camp at Code Ninjas West Springs, Calgary (from 21 Aug to 25 Aug, 2023, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 21, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 25, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/59131//1686338003'
    },
    {
        CampName: 'Intro to Roblox Development camp at Code Ninjas West Springs (July 10 - July 14, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 14, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57362//1686338006'
    },
    {
        CampName: 'Intro to Roblox Development camp at Code Ninjas West Springs (July 31 - Aug 4, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 31, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 4, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57926//1686338006'
    },
    {
        CampName: 'Intro to Roblox Development camp at Code Ninjas West Springs (Aug 21 - Aug 25, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 21, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 25, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57945//1686338006'
    },
    {
        CampName: 'Intro to Roblox Development camp at Code Ninjas West Springs (Aug 28 - Aug 30, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 28, 2023   1:00 PM',
        CampEndTime: 'Wed, Aug 30, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57946//1686338006'
    },
    {
        CampName: '3D Design and Print Camp at Code Ninjas West Springs Calgary (July 3 - July 7, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 3, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 7, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57197//1686338012'
    },
    {
        CampName: '3D Design and Print Camp at Code Ninjas West Springs Calgary (Aug 8 - Aug 11, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 11, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57925//1686338012'
    },
    {
        CampName: '3D Design and Print Camp at Code Ninjas West Springs Calgary (Aug 21 - Aug 25, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 21, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 25, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57944//1686338012'
    },
    {
        CampName: 'Code your own Robot in Minecraft camp at Code Ninjas West Springs (July 17 - July 21, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 17, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 21, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57444//1686338016'
    },
    {
        CampName: 'Code your own Robot in Minecraft camp at Code Ninjas West Springs (July 31- Aug 4, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 31, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 4, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57930//1686338016'
    },
    {
        CampName: 'LEGO Robotics Camp at Code Ninjas West Springs, Calgary (from 10 July to 14 July, 2023, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 14, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57365//1686338020'
    },
    {
        CampName: 'LEGO Robotics Camp at Code Ninjas West Springs, Calgary (from 24 July to 28 July, 2023, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 24, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 28, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57923//1686338020'
    },
    {
        CampName: 'LEGO Robotics Camp at Code Ninjas West Springs, Calgary (from 8 Aug to 11 Aug, 2023, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 11, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/59132//1686338020'
    },
    {
        CampName: 'LEGO Robotics Camp at Code Ninjas West Springs, Calgary (from 21 Aug to 25 Aug, 2023, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 21, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 25, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57949//1686338020'
    },
    {
        CampName: 'LEGO Python Engineers Camp at Code Ninjas West Springs (July 10 - July 14, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 10, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 14, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57376//1686338025'
    },
    {
        CampName: 'LEGO Python Engineers Camp at Code Ninjas West Springs (Aug 8 - Aug 11, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 11, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57938//1686338025'
    },
    {
        CampName: 'LEGO Python Engineers Camp at Code Ninjas West Springs (Aug 21 - Aug 25, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 21, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 25, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57951//1686338025'
    },
    {
        CampName: 'Operation: Code Breakers Camp at Code Ninjas West Springs (July 17 - July 21, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 17, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 21, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57448//1686338030'
    },
    {
        CampName: 'Operation: Code Breakers Camp at Code Ninjas West Springs (Aug 8 - Aug 11, 9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Tue, Aug 8, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 11, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57936//1686338030'
    },
    {
        CampName: 'Operation: Code Breakers Camp at Code Ninjas West Springs (Aug 28 - Aug 30, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 28, 2023   1:00 PM',
        CampEndTime: 'Wed, Aug 30, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57955//1686338030'
    },
    {
        CampName: 'Composing with Code Camp at Code Ninjas West Springs, Calgary from 3 July to 7 July, 2023 (1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 3, 2023   1:00 PM',
        CampEndTime: 'Fri, Jul 7, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57356//1686338034'
    },
    {
        CampName: 'Composing with Code Camp at Code Ninjas West Springs, Calgary from 14 Aug to 18 Aug, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Aug 14, 2023   09:00 AM',
        CampEndTime: 'Fri, Aug 18, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57939//1686338034'
    },
    {
        CampName: 'Program and Play in Python Camp at Code Ninjas West Springs, Calgary (31 July 2023 to 4 Aug 2023, 1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Jul 31, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 4, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57931//1686338038'
    },
    {
        CampName: 'Next Level Roblox Development Camp at Code Ninjas West Springs, Calgary from 24 July to 28 July, 2023 (9:00 AM - 12:00 PM each day)',
        CampStartTime: 'Mon, Jul 24, 2023   09:00 AM',
        CampEndTime: 'Fri, Jul 28, 2023   12:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57491//1686338041'
    },
    {
        CampName: 'Next Level Roblox Development Camp at Code Ninjas West Springs, Calgary from 14 Aug to 18 Aug, 2023 (1:00 PM - 4:00 PM each day)',
        CampStartTime: 'Mon, Aug 14, 2023   1:00 PM',
        CampEndTime: 'Fri, Aug 18, 2023   4:00 PM',
        CampLink: 'https://members.codeninjas.com/e/?=CNWestSprings/55/57940//1686338041'
    }
];
function translateRawData(dataElement, filterMonthIndex) {
    let campName = (dataElement.CampName.match("(.+) at Code Ninjas West Springs, Calgary") || ["", dataElement.CampName])[1];
    let campStartTime = new Date(dataElement.CampStartTime.split("   ").join(" "));
    let campEndTime = new Date(dataElement.CampEndTime.split("   ").join(" "));
    let campLink = dataElement.CampLink;
    let clampMinimum = new Date(`2023/${filterMonthIndex}/1`).getTime();
    let clampMaximum = new Date(`2023/${filterMonthIndex + 1}/1`).getTime();
    let campState = "Morning";
    if (campStartTime.getDay() == campEndTime.getDay()) {
        campState = "AllDay";
    }
    if (campStartTime.getHours() >= 13) {
        campState = "Afternoon";
    }
    campStartTime = new Date(Math.min(clampMaximum, Math.max(clampMinimum, campStartTime.getTime())));
    campEndTime = new Date(Math.min(clampMaximum, Math.max(clampMinimum, campEndTime.getTime())));
    if (campStartTime.getTime() == campEndTime.getTime()) {
        return null;
    }
    let extraStyles = "Normal";
    if (campEndTime.getTime() == clampMaximum) {
        extraStyles = "Cut";
    }
    if (campStartTime.getTime() == clampMinimum) {
        extraStyles = "Cut";
    }
    let newCampElement = new Camp(campName, campLink, campStartTime, campEndTime, campState, extraStyles);
    return newCampElement;
}
{
    let juneSpecificEvents = [];
    for (let rawCampDataElement of rawCampData) {
        let parsedCampData = translateRawData(rawCampDataElement, 6);
        if (parsedCampData)
            juneSpecificEvents.push(parsedCampData);
    }
    setUpCalendar(document.querySelector("#June"), juneSpecificEvents, "Thursday", 30);
}
{
    let julySpecificEvents = [];
    for (let rawCampDataElement of rawCampData) {
        let parsedCampData = translateRawData(rawCampDataElement, 7);
        if (parsedCampData)
            julySpecificEvents.push(parsedCampData);
    }
    setUpCalendar(document.querySelector("#July"), julySpecificEvents, "Saturday", 31);
}
{
    let augustSpecificEvents = [];
    for (let rawCampDataElement of rawCampData) {
        let parsedCampData = translateRawData(rawCampDataElement, 8);
        if (parsedCampData)
            augustSpecificEvents.push(parsedCampData);
    }
    setUpCalendar(document.querySelector("#August"), augustSpecificEvents, "Tuesday", 31);
}
