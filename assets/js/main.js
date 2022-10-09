/*  
    Mobile nav bar
    모바일 화면의 사이즈가 되면 메뉴가 변견됩니다.
*/
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const xtoggleBtn = document.querySelector('.hide-left-side-bar-btn');

toggleBtn.addEventListener('click', () => {
    $('.mobile-nav').css({
		display: "block",
		animation: "fadeInLeftToRight 1s"
	});
});

xtoggleBtn.addEventListener('click', () => {
    $('.mobile-nav').css({
		animation: "fadeInRightToLeft 1s"
	});
	setTimeout(function() {
		$('.mobile-nav').css({
			display: "none"
		});
	}, 1000);
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