const weatherElement = document.querySelector('#weather');

// 3초 후 #weather 내용 변경
setTimeout(() => {
  weatherElement.innerHTML = '기온은 <strong>-3℃</strong>가 예상됩니다.';
}, 3000);
