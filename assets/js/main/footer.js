let xhttp_footer = new XMLHttpRequest();
xhttp_footer.onreadystatechange = function () {
    if (xhttp_footer.readyState == 4 && xhttp_footer.status == 200) {
        jsonfunc_footer(this.responseText); //this = xhttp_footer
        //		jsonfunc_footer(xhttp_footer.responseText);  둘다 가능
    }
}
xhttp_footer.open("GET", "./assets/json/psmdev.web.json", true);
xhttp_footer.send();

function jsonfunc_footer(jsonText_footer) {

    let json_footer = JSON.parse(jsonText_footer);

    for (i = 0; i < json_footer.length; i++) {
        let Web_Information = json_footer[i].Web_Information;
        let Web_Title = json_footer[i].Web_Title;
        let Web_Version = json_footer[i].Web_Version;
        let Web_Menu_Version = json_footer[i].Web_Menu_Version;
        let Web_Build = json_footer[i].Web_Build;
        let Web_Last_Update = json_footer[i].Web_Last_Update;
        let Web_Developer = json_footer[i].Web_Developer;
        let Web_Youtube = json_footer[i].Web_Youtube;
        let Web_Discord = json_footer[i].Web_Discord;
        let Web_Gihub = json_footer[i].Web_Gihub;

        $("#main_title").html(`『${Web_Title}』`);
        $("#main_discord_btn").attr("href", `${Web_Discord}`);

        $("#footer").append(`
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 offset-md-1 footer-about">
                            <h2>${Web_Title}</h2>
                            <p>
                                ${Web_Title}는 ${Web_Developer}의 포트폴리오를</br>
                                업로드하는 곳 입니다.
                            </p>
                        </div>
                        
                        <div class="col-md-2 offset-md-1 footer-text">
                            <h3>소식</h3>
                            <p><a href="./Newswire">Newswire</a></p>
                            <p><a href="./Newswire/notice">Notice</a></p>
                            <p><a href="./Newswire/patchnote">PatchNote</a></p>
                        </div>

                        <div class="col-md-2 offset-md-1 footer-text">
                            <h3>문서</h3>
                            <p><a href="./roadmaps">Roadmaps</a></p>
                            <p><a href="./t/terms">Terms</a></p>
                            <p><a href="./t/license">License</a></p>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <h3>정보</h3>
                            <p>
                                Developer: ${Web_Developer}</br>
                                Version: ${Web_Version}</br>
                                Last Update: ${Web_Last_Update}</br>
                                SNS: 
                                <a href="${Web_Youtube}"><i class="fab fa-youtube"></i></a> <a href="${Web_Discord}"><i class="fab fa-discord"></i></a> <a href="${Web_Gihub}"><i class="fab fa-github"></i></a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 footer-copyright">
                            <a>Copyright &copy; 2022 ${Web_Title}. All Rights Reserved</a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
}