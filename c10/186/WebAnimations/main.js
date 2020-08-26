document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        opacity: [
          1.0, // 시작 값
          0.5 // 종료 값
        ]
      },
      {
        duration: 500, // 밀리초 지정
        fill: 'forwards', // 종료 시 속성을 지님
        easing: 'ease' // 가속도 종류
      }
    );
  } else {
    element.animate(
      {
        opacity: [
          0.5, // 시작 값
          1.0 // 종료 값
        ]
      },
      {
        duration: 500, // 밀리초 지정
        fill: 'forwards', // 종료 시 속성을 지님
        easing: 'ease' // 가속도 종류
      }
    );
  }
});
