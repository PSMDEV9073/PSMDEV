let xhttp_footer = new XMLHttpRequest();
xhttp_footer.onreadystatechange = function () {
	if(xhttp_footer.readyState == 4 && xhttp_footer.status == 200){
		jsonfunc_footer(this.responseText); //this = xhttp_footer
//		jsonfunc_footer(xhttp_footer.responseText); // 둘다 가능
	}
}
xhttp_footer.open("GET","../assets/json/psmdev.web.json", true);
xhttp_footer.send();

function jsonfunc_footer( jsonText_footer ) {

	let json_footer = JSON.parse(jsonText_footer);

	for(i=0; i<json_footer.length; i++){
            let Web_Information = json_footer[i].Web_Information;
            let Web_Title = json_footer[i].Web_Title;
            let Web_Version = json_footer[i].Web_Version;
            let Web_Build = json_footer[i].Web_Build;
            let Web_Last_Update = json_footer[i].Web_Last_Update;
            let Web_Developer = json_footer[i].Web_Developer;
            let Web_Youtube = json_footer[i].Web_Youtube;
            let Web_Discord = json_footer[i].Web_Discord;
            let Web_Gihub = json_footer[i].Web_Gihub;

            $("#footer").append(`
                <img src="../assets/images/svg/footer-wave.svg">
                <div class="footer-top">
                    <div class="container" style="border-bottom: 2px Blue Solid;">
                        <div class="row">
                            <div class="footer-col col-md-4 text-left">
                                <h2 class="line-height-40px">${Web_Title}</h2>
                                <h5 class="line-height-23px">${Web_Title} | Portfolio of ${Web_Developer}</h5>
        
                                <ul class="footer-url">
                                    <li>
                                        <a href="${Web_Youtube}" target="_blank">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="${Web_Discord}" target="_blank">
                                            <i class="fa-brands fa-discord"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="${Web_Gihub}" target="_blank">
                                            <i class="fa fa-github" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                                
                                <p class="line-height-35px">Copyright © 2022 ${Web_Title}. All Rights Reserved</p>
                                
                            </div>
                            </br>
        
                            <!--div class="footer-col col-md-4 text-left">
                                <h5>Project</h5>
                                <p>프로젝트 안내</p>
                                <p><a href="#">개발 노트</a></p>
                            </div-->
        
                            <div class="footer-col col-md-4 text-left">
                                <h5>문서</h5>
                                <p><a href="../roadmaps">로드맵</a></p>
                                <p><a href="../t/terms">이용약관</a></p>
                                <p><a href="../t/license">라이센스</a></p>
                            </div>
                        </div>
                    </div>
                </div><!-- footer top -->
        
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="footer-col col-md-4 text-left">
                                <p class="webversion-text">Web Version: ${Web_Version}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `);
		//txt += "<br>";
	}
}