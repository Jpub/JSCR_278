const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  // 전체 화면 전환
  myRequestFullScreen(document.body);
});

function myRequestFullScreen(element) {
  if (element.requestFullscreen) {
    // 표준 사양
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari, Chrome
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    // IE11+
    element.msRequestFullscreen();
  }
}

const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (event) => {
  // 전체 화면 해제
  myCancelFullScreen();
});

function myCancelFullScreen() {
  if (document.exitFullscreen) {
    // 표준 사양
    document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    // Safari, Chrome
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    // IE 11+
    document.msExitFullscreen();
  }
}
