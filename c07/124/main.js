// 말풍선 요소
const balloon = document.querySelector('#balloon');

// 대상 문자열 요소
const paragraph = document.querySelector('.paragraph');

// 선택 작업 시 처리
paragraph.addEventListener('selectstart', () => {
  // 클릭 해제 시 처리
  paragraph.addEventListener(
    'mouseup',
    (event) => {
      // 선택한 문자열 가져오기※
      const selectionCharacters = window.getSelection().toString();

      if (selectionCharacters.length > 0) {
        // 한 글자 이상인 경우 문자를 표시
        balloon.innerHTML = selectionCharacters;
        balloon.classList.add('on');
        balloon.style.left =
          `${event.clientX - balloon.clientWidth / 2}px`;
        balloon.style.top =
          `${event.clientY - balloon.clientHeight * 2}px`;
      } else {
        // 선택된 문자열이 없으면 말풍선 닫기
        removePopup();
      }
    },
    {
      once: true
    }
  );
});

// 말풍선 클릭 시 닫기
balloon.addEventListener('click', removePopup);

// 말풍선 닫기 처리
function removePopup() {
  balloon.classList.remove('on');
}
