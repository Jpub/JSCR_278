document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        transform: [
          'translateX(0px)', // 시작 값
          'translateX(300px)' // 종료 값
        ]
      },
      {
        duration: 3000, // 밀리초 지정
        fill: 'forwards', // 종료 시 속성을 지님
        easing: 'ease' // 가속도 종류
      }
    );
  } else {
    element.animate(
      {
        transform: [
          'translateX(300px)', // 시작 값
          'translateX(0px)' // 종료 값
        ]
      },
      {
        duration: 3000, // 밀리초 지정
        fill: 'forwards', // 종료 시 속성을 지님
        easing: 'ease' // 가속도 종류
      }
    );
  }
});
