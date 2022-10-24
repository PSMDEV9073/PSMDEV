let xhttp_main_newswire = new XMLHttpRequest();

xhttp_main_newswire.onreadystatechange = function () {
	if(xhttp_main_newswire.readyState == 4 && xhttp_main_newswire.status == 200){
		jsonfunc_main_newswire(this.responseText); //this = xhttp_main_newswire
//		jsonfunc_main_newswire(xhttp_main_newswire.responseText); // 둘다 가능
	}
}
xhttp_main_newswire.open("GET","./assets/json/newswire.json", true);
xhttp_main_newswire.send();

function jsonfunc_main_newswire( jsonText_main_newswire ) {

	let json_main_newswire = JSON.parse(jsonText_main_newswire);

	for(i=0; i<json_main_newswire.length; i++){
        let Newswire_CTGR = json_main_newswire[i].Newswire_CTGR;
        let Newswire_Num = json_main_newswire[i].Newswire_Num;
        let Newswire_Writer = json_main_newswire[i].Newswire_Writer;
        let Newswire_Title = json_main_newswire[i].Newswire_Title;
        let Newswire_Desc = json_main_newswire[i].Newswire_Desc;
        let Newswire_Date = json_main_newswire[i].Newswire_Date;
        let Newswire_Detail_Date = json_main_newswire[i].Newswire_Detail_Date;
        let Newswire_Page_Num = json_main_newswire[i].Newswire_Page_Num;
        let Newswire_Url = json_main_newswire[i].Newswire_Url;
        let main_view = json_main_newswire[i].Newswire_View;

        if(main_view == "active") {
            $("#main_page_newswire_view").append(`
                <a href="${Newswire_Url}" class="source-view-btn">
                    <div class="col-md-4 col-sm-6 portfolio-item alefttoright">
                        <div class="portfolio-caption">
                                <h4>${Newswire_Title}</h4>
                                <p>자세한 내용은 클릭후 확인</p>
                        </div>
                    </div>
                </a>
            `);
        } else {
            $("#main_page_newswire_view").html(`
                <div class="col-lg-12 text-center" style="padding-bottom: 50px;">
                    <h2>Newswire</h2>
                    <h3 class="text-muted" style="font-size: 17px;">~ 10.13.2022 까지의 작업을 볼 수 있습니다.</h3>
                </div>
            `);
        }
	}
}

jQuery(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 750) {
			$('.alefttoright').css({
                animation: "aLeftToRight 1s"
            });
		}
	});
});