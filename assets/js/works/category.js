var category_all = document.getElementById("category_all");
var category_c = document.getElementById("category_c");
var category_c_sharp = document.getElementById("category_c_sharp");
var category_discord_js = document.getElementById("category_discord_js");
var category_html = document.getElementById("category_html");
var category_php = document.getElementById("category_php");

let xhttp_works = new XMLHttpRequest();

xhttp_works.onreadystatechange = function () {
	if(xhttp_works.readyState == 4 && xhttp_works.status == 200){
		jsonfunc_works(this.responseText); //this = xhttp_works
//		jsonfunc_works(xhttp_works.responseText); // 둘다 가능
	}
}
xhttp_works.open("GET","../assets/json/works.json", true);
xhttp_works.send();

function jsonfunc_works( jsonText_works ) {

	let json_works = JSON.parse(jsonText_works);

	for(i=0; i<json_works.length; i++){
        let works_title = json_works[i].works_title;
        let works_description = json_works[i].works_description;
        let works_image = json_works[i].works_image;
        let works_url = json_works[i].works_url;
        let works_demo = json_works[i].works_demo;
        let works_category = json_works[i].works_category;
        let works_target = json_works[i].works_target;

        if(works_demo == "none") {
            $("#w_category").append(`
                <div class="col-lg-4 col-md-6 mb-4 ${works_category}">
                    <div class="card h-100">
                        <a class="none-hover" target="${works_target}" href="${works_url}">
                            <div class="card-body">
                                <h4 class="card-title portfolio-title" id="portfolio_title">
                                    <img class="card-image" src="${works_image}">
                                    ${works_title}
                                </h4>
                                <p class="card-text portfolio-description" id="portfolio_description">
                                    ${works_description}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            `);
        } else {
            $("#w_category").append(`
                <div class="col-lg-4 col-md-6 mb-4 ${works_category}">
                    <div class="card h-100">
                        <a class="none-hover" target="${works_target}" href="${works_url}">
                            <div class="card-body">
                                <h4 class="card-title portfolio-title" id="portfolio_title">
                                    <img class="card-image" src="${works_image}">
                                    <span>${works_title}</span>
                                    (<a class="demo-url" href="${works_demo}" target="${works_target}">
                                        데모보기
                                    </a>)
                                </h4>
                                <p class="card-text portfolio-description" id="portfolio_description">
                                    ${works_description}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            `);
        }

        $('#category_all').click(function(){
            category_all.classList.add("choise");
            category_c.classList.remove("choise");
            category_c_sharp.classList.remove("choise");
            category_discord_js.classList.remove("choise");
            category_html.classList.remove("choise");
            category_php.classList.remove("choise");
            $('.lang-c').css({
                display: "block"
            });
            $('.lang-c-sharp').css({
                display: "block"
            });
            $('.lang-discord-js').css({
                display: "block"
            });
            $('.lang-html').css({
                display: "block"
            });
            $('.lang-php').css({
                display: "block"
            });
        });
        $('#category_c').click(function(){
            category_all.classList.remove("choise");
            category_c.classList.add("choise");
            category_c_sharp.classList.remove("choise");
            category_discord_js.classList.remove("choise");
            category_html.classList.remove("choise");
            category_php.classList.remove("choise");
            $('.lang-c').css({
                display: "block"
            });
            $('.lang-c-sharp').css({
                display: "none"
            });
            $('.lang-discord-js').css({
                display: "none"
            });
            $('.lang-html').css({
                display: "none"
            });
            $('.lang-php').css({
                display: "none"
            });
        });
        $('#category_c_sharp').click(function(){
            category_all.classList.remove("choise");
            category_c.classList.remove("choise");
            category_c_sharp.classList.add("choise");
            category_discord_js.classList.remove("choise");
            category_html.classList.remove("choise");
            category_php.classList.remove("choise");
            $('.lang-c').css({
                display: "none"
            });
            $('.lang-c-sharp').css({
                display: "block"
            });
            $('.lang-discord-js').css({
                display: "none"
            });
            $('.lang-html').css({
                display: "none"
            });
            $('.lang-php').css({
                display: "none"
            });
        });
        $('#category_discord_js').click(function(){
            category_all.classList.remove("choise");
            category_c.classList.remove("choise");
            category_c_sharp.classList.remove("choise");
            category_discord_js.classList.add("choise");
            category_html.classList.remove("choise");
            category_php.classList.remove("choise");
            $('.lang-c').css({
                display: "none"
            });
            $('.lang-c-sharp').css({
                display: "none"
            });
            $('.lang-discord-js').css({
                display: "block"
            });
            $('.lang-html').css({
                display: "none"
            });
            $('.lang-php').css({
                display: "none"
            });
        });
        $('#category_html').click(function(){
            category_all.classList.remove("choise");
            category_c.classList.remove("choise");
            category_c_sharp.classList.remove("choise");
            category_discord_js.classList.remove("choise");
            category_html.classList.add("choise");
            category_php.classList.remove("choise");
            $('.lang-c').css({
                display: "none"
            });
            $('.lang-c-sharp').css({
                display: "none"
            });
            $('.lang-discord-js').css({
                display: "none"
            });
            $('.lang-html').css({
                display: "block"
            });
            $('.lang-php').css({
                display: "none"
            });
        });
        $('#category_php').click(function(){
            category_all.classList.remove("choise");
            category_c.classList.remove("choise");
            category_c_sharp.classList.remove("choise");
            category_discord_js.classList.remove("choise");
            category_html.classList.remove("choise");
            category_php.classList.add("choise");
            $('.lang-c').css({
                display: "none"
            });
            $('.lang-c-sharp').css({
                display: "none"
            });
            $('.lang-discord-js').css({
                display: "none"
            });
            $('.lang-html').css({
                display: "none"
            });
            $('.lang-php').css({
                display: "block"
            });
        });
	}
}