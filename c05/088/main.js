const date = new Date();
// 날짜 설정
date.setFullYear(2015);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = date.toLocaleString();
