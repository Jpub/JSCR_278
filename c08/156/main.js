// a 요소 모두 가져오기
const aElementList = document.querySelectorAll('a');

// a 요소별 처리
aElementList.forEach((element) => {
  //a 태그에 target 속성이 없으면 return
  if (element.hasAttribute('target') === false) {
    return;
  }

  // target이 _blank 속성이 아니면 return
  if (element.getAttribute('target') !== '_blank') {
    return;
  }

  // rel 속성에 noopener 설정
  element.setAttribute('rel', 'noopener');
});
