// create-modal-button 클릭 시 처리
document
  .querySelector('#create-modal-button')
  .addEventListener('click', displayModalWindow);

/** 모달 윈도우 창 표시  */
function displayModalWindow() {
  // 모달 윈도우 창 생성
  const modalElement = document.createElement('div');
  // modal 클래스 부여
  modalElement.classList.add('modal');

  // 모달 윈도우 내부 요소 생성
  const innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = `
    <p>모달 윈도우 내용 </p>
    <div class="character"></div>
  `;
  // 모달 윈도우 내부 요소 배치
  modalElement.appendChild(innerElement);
  // body 요소에 모달 윈도우 배치
  document.body.appendChild(modalElement);

  // 내부 요소 클릭 시 모달 윈도우 삭제 처리
  innerElement.addEventListener('click', () => {
    closeModalWindow(modalElement);
  });
}

/** 모달 윈도우 닫기  */
function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}
