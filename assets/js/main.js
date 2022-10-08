/*  
    Mobile nav bar
    모바일 화면의 사이즈가 되면 메뉴가 변견됩니다.
*/
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    //icons.classList.toggle('active')
});

/*  
    Scroll to top
    아래로 스크롤을 하면 위로 스크롤을 할 수 있는 버튼을 보여줍니다.

    Chat bot
    간단한 문의을 전송 할 수 있는 쳇봇입니다. (빠르게 문의하기)
    추후 채팅 입력하면 그에 맞는 답변을 자동으로 해주는 것으로 변경 예정입니다.
*/
jQuery(function($) {
	$(window).scroll(function() {
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
	$('#scrollToTop').click(function() {
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	$('#chatBot').click(function() {
		$('#chatBot').css({
			backgroundColor: "blueviolet",
			border: "none",
			borderRadius: "50px",
			width: "300px"
		});
		$('#chatBot_message').css({
			display: "block",
			right: "10px",
			width: "300px"
		});
	});

	$('#contact_box_main_close').click(function() {
		$('.service-bot').css({
			display: "none"
		});
	});

	$('#chatBot_message').click(function() {
		$('.service-bot').css({
			display: "block"
		});

		$('#chatBot').css({
			backgroundColor: "Black",
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


/*  
    Send discord webhook message
    저장된 디스코드 웹훅으로 메시지가 전송됩니다.

function sendMessage() {
	const request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1006085214868611122/KHtV-A2mqieYpyV-7ZSYJShzxKHP9sko5c0T7YWyMJnSoQuqUnkBKqEG9nc8PMTlx8c7");

	request.setRequestHeader('Content-type', 'application/json');
	const webhook_discord_name = document.getElementById("webhook_discord_name").value;
	const webhook_title = document.getElementById("webhook_title").value;
	const webhook_image_or_video_url = document.getElementById("webhook_image_or_video_url").value;
	const webhook_message = document.getElementById("webhook_message").value;

	const params = {
	  	username: "ProjectPBB Contacts",
	  	content: `이름: ${webhook_discord_name}\n제목: ${webhook_title}\n내용: ${webhook_message}\n자료: ${webhook_image_or_video_url}`
	}

	request.send(JSON.stringify(params));

	$('.not-send').css({
		display: "none"
	});

	$('.success-send').css({
		display: "block"
	});

	auto_close();
	$("#auto_close_count").html(`이 화면은 5 초뒤 자동으로 닫힙니다.`);
}
*/