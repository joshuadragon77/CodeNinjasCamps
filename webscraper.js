(()=>{
    let mainCardsTable = document.querySelector("#pageinlay > parent-listing > div");
    
    let mainCards = mainCardsTable.getElementsByClassName("mc_card_listing mc_col_33_cardlisting ng-scope");
    
    alert(`Found ${mainCards.length}`);

    function wait(timeout){
        return new Promise((accept)=>{
            setTimeout(accept, timeout);
        })
    }

    let compiledCampData = [];

    let numberOfMainCards = mainCards.length;

    (async()=>{
        await wait(200);

        for (let i = 0;i<numberOfMainCards;i++){

            
            await wait(400);

            let mainCardsTable = document.querySelector("#pageinlay > parent-listing > div");
            let mainCard = mainCardsTable.getElementsByClassName("mc_card_listing mc_col_33_cardlisting ng-scope")[i];
            mainCard.querySelector(".card-content").click();
            console.log(mainCard.querySelector(".card-content"));

            await wait(1500);

            let campCards = document.querySelector("#pageinlay > detail-view > child-listing > div").getElementsByClassName("mc_card_listing mc_col_33_cardlisting ng-scope");

            let index = 0;

            for (let campCard of campCards){

                let campName = campCard.querySelector(`#childEventTitleNameListItem_${index}`).innerText;
                let campStartTime = campCard.querySelector(`#childEventnotesNameListItem_${index} > div:nth-child(2) > div:nth-child(1)`).innerText;
                let campEndTime = campCard.querySelector(`#childEventnotesNameListItem_${index} > div:nth-child(2) > div:nth-child(2)`).innerText;
                
                campCard.querySelector(`#childEventnotesNameListItem_${index} > div.mc_view_more > p`).click();

                index ++;

                await wait(500);

                document.querySelector("#detailModal > div.mc-child-description > parent-detail > div > div.pagelay > div > div:nth-child(1) > div.mc-w-10.mc-share-icon > social-sharing > img").click();

                await wait(150);

                let link = document.querySelector("#meventregurl").innerText;

                compiledCampData.push({
                    CampName: campName,
                    CampStartTime: campStartTime.match(/^Start:.(.+)/)[1],
                    CampEndTime: campEndTime.match(/^End:.(.+)/)[1],
                    CampLink: link
                });

                document.querySelector("#detailModal > div.mc-child-description > parent-detail > div > div.pagelay > div > div:nth-child(1) > div.mc-w-10.mc-share-icon > social-sharing > div.mc-component.ng-scope > div > div > div.mc-modal-header-socialsharing > button > img").click();
                await wait(50);
                document.querySelector("#detailModal > div.mc-btn.flat > span").click();
                await wait(50);

                
            }
            document.querySelector("#view-1 > div.navbar > div.navbar-inner.fixed-navbar.list.navbaricon-align > div.left > a > span").click();

            await wait(150);
            console.log(JSON.stringify(compiledCampData));

        }
    })();

})();