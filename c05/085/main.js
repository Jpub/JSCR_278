const date = new Date();
const day = date.getDay();
const dayList = ['일', '월', '화', '수', '목', '금', '토'];
const label = dayList[day];

// HTML에 표시
document.querySelector('#log').innerHTML = `오늘은 ${label}요일입니다.`;
