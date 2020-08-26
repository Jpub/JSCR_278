const date = new Date();
const month = date.getMonth() + 1; // 월
const day = date.getDate(); // 일
const label = `${month}월 ${day}일`; // 날짜 표시

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `오늘은 ${label}입니다.`;
