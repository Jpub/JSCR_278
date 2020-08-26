/** 마우스 휠 무효화 전환 변수  */
let enableMouseWheel = true;

// 체크박스 클릭 시 처리 작업
document
  .querySelector('#mouseWheelToggle')
  .addEventListener('click', (event) => {
  // 체크박스에 값이 들어오면 마우스 휠 기능 무효화
    enableMouseWheel = event.target.checked === false;
  });

// 스크롤 요소에서 스크롤 시 처리 작업
document
  .querySelector('.scrollable-element')
  .addEventListener('wheel', (event) => {
    // 마우스 휠 기능 작동 상태 시 무효 처리 스킵
    if (enableMouseWheel === true) {
      return;
    }

    // 마우스 휠 무효화 시 event.preventDefault( ) 실행
    event.preventDefault();
  });