const weatherElement = document.querySelector('#weather');

// 3초 뒤 #weather 내용 변경
setTimeout(() => {
  weatherElement.textContent = '기온은 24℃가 예상됩니다.';
}, 3000);
