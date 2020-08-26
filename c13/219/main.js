console.log('실행 시작 시간', new Date().toLocaleTimeString());

setTimeout(() => {
  // 처리 작업
  console.log('setTimeout 실행 후 시간', new Date().toLocaleTimeString());
}, 1000); // 1000 밀리초 후 실행
