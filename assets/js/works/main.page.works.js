let xhttp_main_works = new XMLHttpRequest();

xhttp_main_works.onreadystatechange = function () {
	if(xhttp_main_works.readyState == 4 && xhttp_main_works.status == 200){
		jsonfunc_main_works(this.responseText); //this = xhttp_main_works
//		jsonfunc_main_works(xhttp_main_works.responseText); // 둘다 가능
	}
}
xhttp_main_works.open("GET","./assets/json/works.json", true);
xhttp_main_works.send();

function jsonfunc_main_works( jsonText_main_works ) {

	let json_main_works = JSON.parse(jsonText_main_works);

	for(i=0; i<json_main_works.length; i++){
        let works_title = json_main_works[i].works_title;
        let works_description = json_main_works[i].works_description;
        let works_image = json_main_works[i].works_image;
        let works_url = json_main_works[i].works_url;
        let works_demo = json_main_works[i].works_demo;
        let works_category = json_main_works[i].works_category;
        let works_target = json_main_works[i].works_target;
        let main_view = json_main_works[i].main_view;

        if(main_view == "active") {
            if(works_demo !== "none") {
                $("#main_page_portfolio_view").append(`
                    <div class="col-md-4 col-sm-6 portfolio-item arightoleft">
                        <div class="portfolio-caption">
                            <div style="padding-bottom: 20px;">
                                <h4>${works_title}</h4>
                                <p>${works_description}</p>
                            </div>
                            <a href="${works_url}" class="source-view-btn">소스코드 <i class="fa fa-external-link" aria-hidden="true"></i></a>
                            <a href="${works_demo}" target="_blank" class="demo-view-btn">데모보기 <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                    </div>
                `);
            } else {
                $("#main_page_portfolio_view").append(`
                    <div class="col-md-4 col-sm-6 portfolio-item arightoleft">
                        <div class="portfolio-caption">
                            <div style="padding-bottom: 20px;">
                                <h4>${works_title}</h4>
                                <p>${works_description}</p>
                            </div>
                            <a href="${works_url}" class="source-view-btn">소스코드 <i class="fa fa-external-link" aria-hidden="true"></i></a>
                            <a class="demo-view-btn">사용불가 <i class="fa fa-times-circle" aria-hidden="true"></i></a>
                        </div>
                    </div>
                `);
            }
        }
	}
}

jQuery(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1380) {
			$('.arightoleft').css({
                animation: "aRightToLeft 1s"
            });
		}
	});
});