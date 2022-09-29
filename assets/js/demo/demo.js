jQuery(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.s-banner').css({
                display: "none"
            });
            $('.sub_navbar_menu').css({
                paddingTop: "0px"
            });
        } else {
            $('.s-banner').css({
                display: "block"
            });
            $('.sub_navbar_menu').css({
                paddingTop: "50px"
            });
        }
    });
});

let xhttp_demo = new XMLHttpRequest();

xhttp_demo.onreadystatechange = function () {
	if(xhttp_demo.readyState == 4 && xhttp_demo.status == 200){
		jsonfunc_demo(this.responseText); //this = xhttp_demo
//		jsonfunc_demo(xhttp_demo.responseText); // 둘다 가능
	}
}
xhttp_demo.open("GET","../assets/json/works.json", true);
xhttp_demo.send();

function jsonfunc_demo( jsonText_demo ) {

	let json_demo = JSON.parse(jsonText_demo);

	for(i=0; i<json_demo.length; i++){
        let works_title = json_demo[i].works_title;
        let works_description = json_demo[i].works_description;
        let works_image = json_demo[i].works_image;
        let works_url = json_demo[i].works_url;
        let works_demo = json_demo[i].works_demo;
        let works_category = json_demo[i].works_category;
        let works_target = json_demo[i].works_target;
        let works_select = json_demo[i].works_select;

        if(works_category == "lang-html") {
            $("#html_portfolio").append(`
                <li><a class="menu-title" id="${works_select}">${works_description}</a></li>
            `);

            if(works_select == "discord_profile_card") {
                $("#demo_title").html(`<h2 class="demo-title">${works_description}</h2>`);
                $("#iframe_src").attr("src", `${works_demo}`);
                discord_profile_card()
            }

            $("#discord_profile_card").click(function(){
                if(works_select == "discord_profile_card") {
                    $("#demo_title").html(`<h2 class="demo-title">${works_description}</h2>`);
                    $("#iframe_src").attr("src", `${works_demo}`);
                    discord_profile_card()
                }
            });
            $("#webhook_send").click(function(){
                if(works_select == "webhook_send") {
                    $("#demo_title").html(`<h2 class="demo-title">${works_description}</h2>`);
                    $("#iframe_src").attr("src", `${works_demo}`);
                    webhook_send()
                }
            });
            $("#side_msg").click(function(){
                if(works_select == "side_msg") {
                    $("#demo_title").html(`<h2 class="demo-title">${works_description}</h2>`);
                    $("#iframe_src").attr("src", `${works_demo}`);
                    side_msg()
                }
            });
            $("#windows_11_box").click(function(){
                if(works_select == "windows_11_box") {
                    $("#demo_title").html(`<h2 class="demo-title">${works_description}</h2>`);
                    $("#iframe_src").attr("src", `${works_demo}`);
                    windows_11_box()
                }
            });
        }
	}
}