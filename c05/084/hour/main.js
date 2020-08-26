const date = new Date();
const hour = date.getHours();
let meridiem; // 오전, 오후 구분
let hour2; // 시간
if (hour < 12) {
  meridiem = '오전';
  hour2 = hour;
} else {
  meridiem = '오후';
  hour2 = hour - 12;
}

const label = `${meridiem} ${hour2}시`;

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `지금은 ${label}입니다.`;
