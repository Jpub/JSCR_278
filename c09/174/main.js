// input 요소 참조
const element = document.querySelector('#myRange');

// 현재 값 가져오기
const value = element.value;

// 화면에 표시
document.querySelector('.log').innerHTML = `현재 값은 ${value}입니다.`;
