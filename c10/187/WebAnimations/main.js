document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        filter: [
          'brightness(100%)', // 시작 값
          'brightness(300%)' // 종료 값
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
        filter: [
          'brightness(300%)', // 시작 값
          'brightness(100%)' // 종료 값
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
