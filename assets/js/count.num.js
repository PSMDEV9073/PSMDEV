$('.count-num').each(function() { // .count-num에 각각 적용
    var $this = $(this),
        countTo = $this.attr('data-count');
        // $this = 첫번째~세번째 .count-num
        // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)
    
    $({ countNum: $this.text()}).animate({
        countNum: countTo 
        // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
        // 0에서 countNum이 된다
    },
    {
        duration: 3000, // 애니메이션이 완료될때까지 걸리는 시간
        easing:'linear', // 애니메이션 효과 방식
        step: function() { // 움직임 각 스텝별로 실행될 함수
            $this.text(Math.floor(this.countNum));
            // Math.floor -> this.countNum의 값을 정수로 만들어준다
        },
        complete: function() { // 움직임이 멈춘 후 실행될 함수
            $this.text(this.countNum);
            // this.countNum이 $this의 text값이 된다
            //alert('finished');
        }
    });  
});