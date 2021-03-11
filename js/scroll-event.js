
//맨 위로 이동버튼 나타내고 숨겨주는 함수
function hideGoTop(scrollTop) { //scrollTop을 받아와서 그 정보로 hideGoTop함수를 동작시키자
    const $goTop = document.querySelector('.go-top');

    $goTop.classList.toggle('hide', scrollTop < 800);

    /*
    if (scrollTop < 800) {
        $goTop.classList.add('hide');
    } else {
        $goTop.classList.remove('hide');
    }
    */
}

//스크롤을 일정부분 내리면 헤더의 css와 로고이미지를 교체하는 함수
function changeFixHeader(scrollTop) {

    const $logoImage = document.querySelector('.inner-header h1 img');
    if (scrollTop > 200) {
        $logoImage.setAttribute('src','img/logo2.png');
        $('header').addClass('on');
        //document.querySelector('header').classlist.add('on');
    } else {
        $logoImage.setAttribute('src','img/logo.png');
        $('header').removeClass('on');
    }
}

//즉시 실행 함수
(function () {

    // 1. 스크롤 이벤트 생성 - 1. 헤더 변경 2. 맨위로 이동 화살표 처리 
    document.addEventListener('scroll', e => {
        //console.log('스크롤 이벤트 발생!');

        // 스크롤 좌표값 얻는 방법
        // console.log(document.documentElement.scrollTop);
        const scrollTop = document.documentElement.scrollTop;

        // 맨위로 이동 버튼 처리
        hideGoTop(scrollTop); //특정 스크롤에서 gotop버튼을 나타나게 해주는 함수 (scrollTop 정보가 필요하며, 그래서 26번에서 변수선언)
        //헤더 변경 처리
        changeFixHeader(scrollTop);
        
    });

    //go-top 스크롤 부드럽게 처리
    document.querySelector('.go-top').addEventListener('click', e => {
        //jquery animate 함수 : 애니메이션의 종류나 속도 지정
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
    });

}());