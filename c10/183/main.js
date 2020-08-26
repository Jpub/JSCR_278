// 요소 가져오기
const element = document.querySelector('.rect');
element.animate(
  {
    transform: [
      'translateX(0px) rotate(0deg)', // 시작값
      'translateX(800px) rotate(360deg)' // 종료값
    ]
  },
  {
    duration: 3000, // 밀리초 지정
    iterations: Infinity, // 반복 횟수
    direction: 'normal', // 반복 작업 방식
    easing: 'ease' // 가속도 종류
  }
);
