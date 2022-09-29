$('#send_message_content').keydown(function() {
    if (event.keyCode === 13) {
        service_send_btn.click();
    }
});

$('#service_send_btn').click(function() {
    // 단어 array
    let hello_hi = ["안녕", "안녕하세요", "ㅎㅇ", "하이", "안뇽", "안냥", "헬로", "HI", "Hi", "hI", "hi", "HELLO", "Hello", "hello"];
    let whats_license = ["저작권", "라이선스", "라이센스", "라센"];
    let swear_words = ["fuck", "Fuck", "FUCK", "Fuck you", "Fuck You", "fuck you", "FUCK YOU", "ㅗ", "ㅂㅅ", "ㅄ", "병신", "ㅆㅂ", "ㅅㅂ", "씨발", "시발", "니애미", "니애비", "느금", "너검"];
    let faq_keywords = ["자주하는 질문", "자주 하는 질문", "질문", "FAQ", "fAQ", "FaQ", "FAq", "faQ", "fAq", "Faq", "faq"];

    if(whats_license.some(whatslicense => send_message_content.value.toLowerCase().includes(whatslicense))) {
        $("#service_bot").append(`
            <div style="padding-top: 10px;"></div>
            <div class="right-chat-box">
                <span>${send_message_content.value}</span>
            </div>
            <div style="padding-top: 10px;"></div>
            <div class="left-chat-box">
                <span>배포중인 파일에만 MIT 라이선스를 적용합니다.</span>
            </div>
        `);
    } else if(swear_words.some(swearwords => send_message_content.value.toLowerCase().includes(swearwords))) {
        $("#service_bot").append(`
            <div style="padding-top: 10px;"></div>
            <div class="right-chat-box">
                <span>${send_message_content.value}</span>
            </div>
            <div style="padding-top: 10px;"></div>
            <div class="left-chat-box">
                <span id="text_auto_close">부적절한 메시지 사용으로 3초 뒤에 상담을 종료합니다.</span>
            </div>
        `);
        // 비속어 사용시 전송 버튼 비활성화
        const target = document.getElementById('service_send_btn');
        target.disabled = true;
        
        // 비속어 사용시 자동 종료
        chat_bot_auto_close()
    } else if(hello_hi.some(sayhello => send_message_content.value.toLowerCase().includes(sayhello))) {
        $("#service_bot").append(`
            <div style="padding-top: 10px;"></div>
            <div class="right-chat-box">
                <span>${send_message_content.value}</span>
            </div>
            <div style="padding-top: 10px;"></div>
            <div class="left-chat-box">
                <span id="text_auto_close">안녕하세요^^</span>
            </div>
        `);
    } else if(faq_keywords.some(faqkeywords => send_message_content.value.toLowerCase().includes(faqkeywords))) {
        $("#service_bot").append(`
            <div style="padding-top: 10px;"></div>
            <div class="right-chat-box">
                <span>${send_message_content.value}</span>
            </div>
            <div style="padding-top: 10px;"></div>
            <div class="left-chat-box">
                <span id="text_auto_close">현재 FAQ를 정리해둔 페이지를 준비중이에요!</span>
            </div>
        `);
    } else {
        $("#service_bot").append(`
            <div style="padding-top: 10px;"></div>
            <div class="right-chat-box">
                <span>${send_message_content.value}</span>
            </div>
            <div style="padding-top: 10px;"></div>
            <div class="left-chat-box">
                <span>해당 질문의 관련된 답변을 찾지 못 했습니다.</span>
            </div>
        `);
    }

    // 입력값 리셋
    send_message_content.value = "";
});

// 카운트 다운
function chat_bot_auto_close() {
    let currentSecond = 3;
    var playTimer;

    const playHandler = () => {
    currentSecond = currentSecond - 1;
    if(currentSecond === 0) {
        $("#text_auto_close").html(`부적절한 메시지 사용으로 ${currentSecond} 뒤에 상담을 종료합니다.`);
        clearInterval(playTimer);
    }
        $("#text_auto_close").html(`부적절한 메시지 사용으로 ${currentSecond} 뒤에 상담을 종료합니다.`);
    };
    
    playTimer = setInterval(playHandler,1000);

    setTimeout(function () {
        window.open('','_self').close();
    }, 4000);
}