const date = new Date();

const locale = date.toLocaleString(); // 예: ‘2020/02/01 21:22:01’
const localeDate = date.toLocaleDateString(); // 예 : ‘2020/02/01’
const localeTime = date.toLocaleTimeString(); // 예 : ’16:15:34’

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `${locale}<br />
   ${localeDate}<br />
   ${localeTime}`;
