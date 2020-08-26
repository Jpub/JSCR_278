console.log('실행 시작 시간', new Date().toLocaleTimeString());

setInterval(() => {
  // 처리 작업
  console.log('setInterval 실행 시간', new Date().toLocaleTimeString());
}, 1000); // 1000 밀리초 후 실행
