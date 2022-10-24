let xhttp_news_page = new XMLHttpRequest();

xhttp_news_page.onreadystatechange = function () {
	if(xhttp_news_page.readyState == 4 && xhttp_news_page.status == 200){
		jsonfunc_news_page(this.responseText); //this = xhttp_news_page
//		jsonfunc_news_page(xhttp_news_page.responseText); // 둘다 가능
	}
}
xhttp_news_page.open("GET","../assets/json/newswire.json", true);
xhttp_news_page.send();

function jsonfunc_news_page( jsonText_news_page ) {
	let json_news_page = JSON.parse(jsonText_news_page );

	for(i=0; i<json_news_page.length; i++){
        let Newswire_CTGR = json_news_page[i].Newswire_CTGR;
        let Newswire_Num = json_news_page[i].Newswire_Num;
        let Newswire_Writer = json_news_page[i].Newswire_Writer;
        let Newswire_Title = json_news_page[i].Newswire_Title;
        let Newswire_Desc = json_news_page[i].Newswire_Desc;
        let Newswire_Date = json_news_page[i].Newswire_Date;
        let Newswire_Url = json_news_page[i].Newswire_Url;
        let Newswire_Page_Num = json_news_page[i].Newswire_Page_Num;

        $("#newswire_list").append(`
            <div class="card mb-4">
                <a href=".${Newswire_Url}">
                    <div class="card-body newswire-box-padding">
                        <h3 class="card-title">
                            <!--small>${Newswire_CTGR}</small-->
                            ${Newswire_Title}
                        </h3>

                        <div class="card-text text-muted" style="max-height: 30px; overflow: hidden;">
                            ${Newswire_Desc}
                        </div>

                        <p class="text-muted" style="padding-top: 10px;">
                            ${Newswire_Date} by ${Newswire_Writer}
                        </p>
                    </div>
                </a>
            </div>
        `);

        $('#ctgr_notice_btn').click(function() {
            console.log("Test ctgr_notice_btn");
            if(Newswire_CTGR == "Notice") {
                $("#newswire_list").html("");
                $("#newswire_list").append(`
                    <div class="card mb-4">
                        <a href="${Newswire_Url}">
                            <div class="card-body newswire-box-padding">
                                <h3 class="card-title">
                                    <!--small>${Newswire_CTGR}</small-->
                                    ${Newswire_Title}
                                </h3>

                                <div class="card-text text-muted" style="max-height: 30px; overflow: hidden;">
                                    ${Newswire_Desc}
                                </div>

                                <p class="text-muted" style="padding-top: 10px;">
                                    ${Newswire_Date} by ${Newswire_Writer}
                                </p>
                            </div>
                        </a>
                    </div>
                `);
            }
        });

        $('#ctgr_patchnote_btn').click(function() {
            console.log("Test ctgr_patchnote_btn");
            if(Newswire_CTGR == "PatchNote") {
                $("#newswire_list").html("");
                $("#newswire_list").append(`
                    <div class="card mb-4">
                        <a href="${Newswire_Url}">
                            <div class="card-body newswire-box-padding">
                                <h3 class="card-title">
                                    <!--small>${Newswire_CTGR}</small-->
                                    ${Newswire_Title}
                                </h3>

                                <div class="card-text text-muted" style="max-height: 30px; overflow: hidden;">
                                    ${Newswire_Desc}
                                </div>

                                <p class="text-muted" style="padding-top: 10px;">
                                    ${Newswire_Date} by ${Newswire_Writer}
                                </p>
                            </div>
                        </a>
                    </div>
                `);
            }
        });
	}
}