const themeChangeButton =
  document.querySelector('.theme-change-button');

// 테마 변경 버튼 클릭 시 처리
themeChangeButton.addEventListener('click', () => {
  // body 요소 클래스 「theme-dark」 변경
  document.body.classList.toggle('theme-dark');
});
