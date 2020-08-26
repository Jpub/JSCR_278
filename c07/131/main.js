const rectAngle = document.querySelector('.rectangle');

// 미디어쿼리 정보
const mediaQueryList = matchMedia('(min-width: 600px)');

// 미디어쿼리 변화 시점에 따라 처리
mediaQueryList.addListener(onMediaQueryChange);

/**
 * 미디어쿼리 변화 시점에 따라 실행되는 함수
 */
function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('윈도우 창의 크기가 600px 이상입니다.');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('윈도우 창의 크기가 600px 미만입니다.');
  }
}

// 화면 표시 시점에 onMediaQueryChange( ) 1회 실행
onMediaQueryChange(mediaQueryList);
