const date = new Date();
const year = date.getFullYear(); // 연도

// HTML에 표시
document.querySelector('#log').innerHTML = `지금은 ${year}년입니다. `;
