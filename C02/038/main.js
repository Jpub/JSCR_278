// 오늘 날짜 불러오기
const today = new Date();

// #main 내부의 HTML 코드를 동적으로 작동하도록 처리
document.querySelector('#main').innerHTML = `
  <h1>오늘 ${today.getMonth() + 1}/${today.getDate()}의 날씨</h1>
  <p>서울은 맑음</p>
`;
