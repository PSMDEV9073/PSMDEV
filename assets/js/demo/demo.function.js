function discord_profile_card() {
    document.getElementById("html_msg").value = `<div class="profile-box">
        <div class="profile-banner-box"></div>
        <div class="profile-profile-image-box">
            <img src="image/Discord-profile.png">
        </div>
        <div class="profile-nickname-and-name-sharp-tag-box">
            <p class="nickname">PSM</p>
            <p class="name-and-tag">IPv8#9041</p>
        </div>
    </div>`;
    document.getElementById("css_msg").value = `* {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .profile-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(24, 25, 28);
        width: 300px;
        height: 152px;
        border-radius: 7px;
    }

    .profile-banner-box {
        background-color: rgba(116, 124, 140);
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        position: relative;
        height: 60px;
    }

    .profile-profile-image-box {
        position: relative;
        top: -49px;
        left: 8.5px;
    }

    .profile-profile-image-box img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 6px solid rgba(24, 25, 28);
    }

    .profile-nickname-and-name-sharp-tag-box {
        position: relative;
        top: -47px;
        left: 16px;
        color: rgba(243, 243, 243);
        font-size: 18px;
    }

    .profile-nickname-and-name-sharp-tag-box .name-and-tag {
        color: rgba(148, 150, 152);
        font-size: 10px;
    }`;
    document.getElementById("js_msg").value = ``;
}

function webhook_send() {
    document.getElementById("html_msg").value = `<div class="contact-box-main">
        <div class="contact-container">  
            <div id="contact">
                <div class="not-send">
                    <button style="position: absolute; top: 11%; right: 3%;" id="contact_box_main_close">X</button>
                    <h3>빠르게 문의하기</h3>
                    <h4 style="color: black;">
                        최대 48시간 이내에 답변이 발송됩니다.</br>
                        (친구요청 거부시 수신거부로 간주됨)
                    </h4>
                    <fieldset>
                        <input id="webhook_discord_name" placeholder="디스코드 이름#테그" type="text" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                        <input id="webhook_title" placeholder="제목" type="text" tabindex="4" required>
                    </fieldset>
                    <fieldset>
                        <input id="webhook_image_or_video_url" placeholder="이미지 또는 동영상 주소(url)" type="url" tabindex="4" required>
                    </fieldset>
                    <fieldset>
                        <textarea id="webhook_message" placeholder="메시지를 입력해주세요...." tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" onclick="sendMessage()">전송하기</button>
                    </fieldset>
                </div>

                <div class="success-send" style="display: none;">
                    <h3 stlye="text-align: center;">성공적으로 전송됬습니다.</h3>
                    <h4 id="auto_close_count" style="color: black; text-align: center;"></h4>
                    <fieldset style="align-items: center;">
                        <button style="position: absolute; left: 37%;" id="contact-submit">이곳을 눌러서 닫기</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById("css_msg").value = `button {
        border: 0;
        outline: 0;
    }
    
    /* =============== CHAT BOT =============== */
    #chatBot {
        width: 50px;
        height: 50px;
        text-align: center;
        text-decoration: none;
        position: fixed;
        bottom: 10px;
        right: 10px;
        text-indent: -99999em;
        cursor: pointer;
        z-index: 2;
        border-radius: 50%;
        border: 2px white solid;
        background: black url("./images/White-Logo50x50.png") center center no-repeat;
      }
      
      #chatBot_message {
        display: none;
        position: relative;
        width: 230px;
        height: 50px;
        text-align: left;
        text-decoration: none;
        position: fixed;
        bottom: 10px;
        right: 70px;
        cursor: pointer;
        z-index: 2;
        border-radius: 50px;
        background-color: blueviolet;
      }
      
      #chatBot_message img {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 5px 5px 5px 5px;
        float: left;
      }
      
      #chatBot_message a {
        position: absolute;
        top: 0;
        left: 50px;
        border-radius: 50px;
        padding: 20px 10px 20px 10px;
        float: left;
        font-size: 10px;
        color: white;
      }
      
      #chatBot:hover {
        text-decoration: none;
        border: 2px black solid;
        background: White url("./images/Black-Logo50x50.png") center center no-repeat;
      }
      
      .contact-box-main {
        display: none;
        width:100%;
        height:100%;
        background:#000;
        position:relative;
        z-index: 999999999;
      }
      
      .contact-box {
        width: 1000px;
        height: 800px;
        position: absolute;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 255, 0.3);
      }
      
      #chatBot {
        width: 50px;
        height: 50px;
        text-align: center;
        text-decoration: none;
        position: fixed;
        bottom: 10px;
        right: 10px;
        text-indent: -99999em;
        cursor: pointer;
        z-index: 2;
        border-radius: 50%;
        border: 2px white solid;
        background: black url("./images/White-Logo50x50.png") center center no-repeat;
      }
      
      /*.contact-box-main .contact-box .webhook-form {
        padding: 10%;
      }
      
      .contact-box-main .contact-box .webhook-form  label {
        color: white;
        font-size: 15px;
        width: 115px;
        text-align: right;
      }
      
      .contact-box-main .contact-box .webhook-form  input {
        outline: 0;
        border: 0;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        color: White;
        font-size: 15px;
      }
      
      .contact-box-main .contact-box .webhook-form  textarea {
        outline: 0;
        border: 0;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        color: White;
        font-size: 15px;
        width: 300px;
        height: 200px;
      }*/
      
      .contact-container {
        position: absolute;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
          max-width:400px;
          width:100%;
      }
      
      #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }
      
      #contact {
          background:#F9F9F9;
          padding:25px;
          margin:50px 0;
      }
      
      #contact h3 {
          color: #F96;
          display: block;
          font-size: 30px;
          font-weight: 400;
      }
      
      #contact h4 {
          margin:5px 0 15px;
          display:block;
          font-size:13px;
      }
      
      fieldset {
          border: medium none !important;
          margin: 0 0 10px;
          min-width: 100%;
          padding: 0;
          width: 100%;
      }
      
      #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
          width:100%;
          border:1px solid #CCC;
          background:#FFF;
          margin:0 0 5px;
          padding:10px;
      }
      
      #contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
          -webkit-transition:border-color 0.3s ease-in-out;
          -moz-transition:border-color 0.3s ease-in-out;
          transition:border-color 0.3s ease-in-out;
          border:1px solid #AAA;
      }
      
      #contact textarea {
          height:100px;
          max-width:100%;
        resize:none;
      }
      
      #contact button[type="submit"] {
          cursor:pointer;
          width:100%;
          border:none;
          background:#0CF;
          color:#FFF;
          margin:0 0 5px;
          padding:10px;
          font-size:15px;
      }
      
      #contact button[type="submit"]:hover {
          background:#09C;
          -webkit-transition:background 0.3s ease-in-out;
          -moz-transition:background 0.3s ease-in-out;
          transition:background-color 0.3s ease-in-out;
      }
      
      #contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }
      
      #contact input:focus, #contact textarea:focus {
          outline:0;
          border:1px solid #999;
      }
      ::-webkit-input-placeholder {
       color:#888;
      }
      :-moz-placeholder {
       color:#888;
      }
      ::-moz-placeholder {
       color:#888;
      }
      :-ms-input-placeholder {
       color:#888;
      }`;
    document.getElementById("js_msg").value = `jQuery(function($) {
        /* =============== SHOW / HIDE GO TO TOP =============== */
        /* Check to see if the window is top if not then display go top button */
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#scrollToTop').fadeIn();
                  $('#chatBot').css({
                    bottom: "70px"
                });
                $('#chatBot_message').css({
                    bottom: "70px"
                });
            } else {
                $('#scrollToTop').fadeOut();
                $('#chatBot').css({
                    bottom: "10px"
                });
                $('#chatBot_message').css({
                    bottom: "10px"
                });
            }
        });
        /* Click event to scroll to top */
        $('#scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    
        $('#chatBot').click(function(){
            $('#chatBot').css({
                backgroundColor: "blueviolet",
                border: "none",
                backgroundImage: "none",
                borderRadius: "50px",
                width: "300px"
            });
            $('#chatBot_message').css({
                display: "block",
                right: "10px",
                width: "300px"
            });
        });
    
        $('#contact_box_main_close').click(function(){
            $('.contact-box-main').css({
                display: "none"
            });
        });
        
        $('#contact-submit').click(function(){
            $('.contact-box-main').css({
                display: "none"
            });
            $('.not-send').css({
                display: "block"
            });
        
            $('.success-send').css({
                display: "none"
            });
    
            document.getElementById('webhook_discord_name').value = "";
            document.getElementById('webhook_title').value = "";
            document.getElementById('webhook_image_or_video_url').value = "";
            document.getElementById('webhook_message').value = "";
        });
    
        $('#chatBot_message').click(function(){
            $('.contact-box-main').css({
                display: "block"
            });
    
            $('#chatBot').css({
                backgroundColor: "Black",
                backgroundImage: "url('.images/all-photo/White-Logo50x50.png')",
                backgroundAttachment: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: "2px white solid",
                borderRadius: "50%",
                width: "50px"
            });
    
            $('#chatBot_message').css({
                display: "none"
            });
        });
    });
    
    function sendMessage() {
        const request = new XMLHttpRequest();
        request.open("POST", "Your webhook url");
    
        request.setRequestHeader('Content-type', 'application/json');
        const webhook_discord_name = document.getElementById("webhook_discord_name").value;
        const webhook_title = document.getElementById("webhook_title").value;
        const webhook_image_or_video_url = document.getElementById("webhook_image_or_video_url").value;
        const webhook_message = document.getElementById("webhook_message").value;
    
        const params = {
              username: "Discord webhook quick contact",
              content: "이름: " + webhook_discord_name + "\n제목: " + webhook_title + "\n내용: " + webhook_message + "\n자료: " + webhook_image_or_video_url
        }
    
        request.send(JSON.stringify(params));
    
        $('.not-send').css({
            display: "none"
        });
    
        $('.success-send').css({
            display: "block"
        });
    
        auto_close();
        $("#auto_close_count").html("이 화면은 5 초뒤 자동으로 닫힙니다.");
    }
    
    function auto_close() {
        let currentSecond = 5;
        //타이머 변수
        var playTimer;
        //타이머 실행시 반복 실행 되는 콜백 함수
        const playHandler = () => {
          currentSecond = currentSecond - 1;
          if(currentSecond === 0){
            $("#auto_close_count").html("이 화면은" + currentSecond + "초뒤 자동으로 닫힙니다.");
            clearInterval(playTimer);
          }
          $("#auto_close_count").html("이 화면은" + currentSecond + "초뒤 자동으로 닫힙니다.");
        };
        
        playTimer = setInterval(playHandler,1000);
    
        setTimeout(function () {
            $('.contact-box-main').css({
                display: "none"
            });
            $('.not-send').css({
                display: "block"
            });
    
            $('.success-send').css({
                display: "none"
            });
            document.getElementById('webhook_discord_name').value = "";
            document.getElementById('webhook_title').value = "";
            document.getElementById('webhook_image_or_video_url').value = "";
            document.getElementById('webhook_message').value = "";
        }, 6000);
    }
    `;
}

function side_msg() {
    document.getElementById("html_msg").value = `<div class="nope-msg-box">
        <div class="nope-msg-boxs">
            <p class="nope-msg-title">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    경고
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </p>
            
            <p class="nope-msg-description">
                현재 너비는 지원되지 않습니다.
                </br>
                너비: 1166px 이상
            </p>
        </div>
    </div>

    <div class="container" id="container">
        <div class="wel-msg-box" id="wel-msg-box">
            <p class="title">
                환영합니다.
            </p>
            <p class="description">
                최대 40자까지 입력 가능
            </p>
        </div>
    </div>`;
    document.getElementById("css_msg").value = `.nope-msg-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    .nope-msg-boxs {
        width: 500px;
        height: 300px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 20px;
    }
    
    .nope-msg-title {
        padding: 10px 0 0 0;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: yellow;
    }
    
    .nope-msg-description {
        padding: 10px 0 0 0;
        text-align: center;
        font-size: 20px;
        color: white;
    }
    
    .container {
        position: absolute;
        bottom: 5%;
        right: 2%;
    }
    
    .wel-msg-box {
        width: 500px;
        height: 80px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 20px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, .5);
        color: white;
    }
    
    .title {
        padding: 10px 0 0 10px;
        font-weight: bold;
    }
    
    .description {
        padding: 0 0 0 10px;
        font-size: 12px;
    }
    
    .nope-msg-box {
        display: none;
    }
    
    @media screen and (max-width: 1165px) {
        .nope-msg-box {
            display: block;
        }
        
        .wel-msg-box {
            display: none;
        }
    }
    
    @media screen and (max-width: 550px) {
        .nope-msg-boxs {
            width: 300px;
            height: 150px;
            background-color: rgba(0, 0, 0, .8);
            border-radius: 20px;
        }
        
        .nope-msg-title {
            font-size: 20px;
            font-weight: bold;
        }
        
        .nope-msg-description {
            font-size: 15px;
        }
    }
    
    @media screen and (max-width: 400px) {
        .nope-msg-boxs {
            width: 250px;
            height: 125px;
            background-color: rgba(0, 0, 0, .8);
            border-radius: 20px;
        }
        
        .nope-msg-title {
            font-size: 15px;
            font-weight: bold;
        }
        
        .nope-msg-description {
            font-size: 10px;
        }
    }`;
    document.getElementById("js_msg").value = `var start = new Date().getTime() / 1000;
	var length = 1;

	window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
		function( callback,  element){
			window.setTimeout(callback, 120);
		};
	})();


	function go(){
		var dif = (new Date().getTime() / 1000) - start; 
		var minutes = dif / 1.2;
		var percentage = (minutes/length) * 500;

		if(percentage > 500){ percentage = 500; }
		
		if( percentage != 500 ){
			document.getElementById('wel-msg-box').style.width = percentage+'px';
		} else if (percentage == 500 ){
			document.getElementById('wel-msg-box').style.width = percentage+'px';
		}
	}


	function Update(){	
		go();
		requestAnimFrame( Update );	
	}

	Update();`;
}

function windows_11_box() {
    document.getElementById("html_msg").value = `<div class="container">
        <div class="right-click-box">
            <li><i class="fa fa-th-large" aria-hidden="true" id="right-padding"></i>보기<i class="fa fa-chevron-right other-color" aria-hidden="true" id="first-left-padding"></i></li>
            <li><i class="fa fa-sort" aria-hidden="true" id="right-padding"></i>정렬 기준<i class="fa fa-chevron-right other-color" aria-hidden="true" id="third-left-padding"></i></li>
            <li><i class="fa fa-list" aria-hidden="true" id="right-padding"></i>분류 방법<i class="fa fa-chevron-right other-color" aria-hidden="true" id="fourth-left-padding"></i></li>

            <li class="bottom-bar"></li>
            <li></li>
            <li><i class="fa fa-plus-circle" aria-hidden="true" id="right-padding"></i>새로 만들기<i class="fa fa-chevron-right other-color" aria-hidden="true" id="fifth-left-padding"></i></li>
            <li><i class="fa fa-tasks" aria-hidden="true" id="right-padding"></i>속성<a class="other-color" id="alt-enter-left-padding">Alt+Enter</a></li>
            
            <li class="bottom-bar"></li>
            <li></li>
            <li><i class="fa fa-terminal" aria-hidden="true" style="color: white; background: black;"></i><a id="cmd-left-padding">Windows 터미널에서 열기</a></li>
            
            <li class="bottom-bar"></li>
            <li></li>
            <li><i class="fa fa-filter" aria-hidden="true" id="right-padding"></i>더 많은 옵션 표시<a class="other-color" id="shift-f10-left-padding">shift+F10</a></li>
        </div>
    </div>`;
    document.getElementById("css_msg").value = `/*******************
        배경 색상
    *******************/

    body {
    background-color: gray;
    }

    /*******************
     오른쪽 글씨 색상
    *******************/

    .other-color {
    color: gray;
    }

    /*******************
        마커 제거
    *******************/

    li {
    list-style:none;
    padding-bottom: 10px;
    font-size: 20px;
    }

    /*******************
        > 위치
    *******************/

    #first-left-padding {
    padding-left: 323px;
    }

    #second-left-padding {
    padding-left: 357px;
    }

    #third-left-padding {
    padding-left: 284px;
    }

    #fourth-left-padding {
    padding-left: 276px;
    }

    #fifth-left-padding {
    padding-left: 259px;
    }

    #cmd-left-padding {
    padding-left: 18px;
    }

    #alt-enter-left-padding {
    padding-left: 250px;
    }

    #shift-f10-left-padding {
    padding-left: 134px;
    }

    /*******************
    오른쪽 아이콘 위치
    *******************/

    #right-padding {
    padding-right: 15px;
    }

    /*******************
        하단 바
    *******************/

    .top-bar {
    border-bottom: solid 3px #e9e9e9;
    }

    .bottom-bar {
    border-bottom: solid 3px #e9e9e9;
    }

    /*******************
        중앙 배열
    *******************/

    .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }

    /*******************
     우클릭 상자
    *******************/

    .right-click-box {
    width: 435px;
    height: 322px;
    background-color: #edf4f9;
    border-radius: 10px;
    border: solid 3px #e9e9e9;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    }`;
    
    document.getElementById("js_msg").value = ``;
}