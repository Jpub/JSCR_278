// 데이터
const userDataList = [
  { name: '곰', age: 18 },
  { name: '여우', age: 27 },
  { name: '사자', age: 32 },
  { name: '얼룩말', age: 41 },
  { name: '기린', age: 56 }
];

// .button 요소의 이벤트 설정
document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  });
});

/**
 * 버튼 클릭 시 처리
 */
function onClickButton(event) {
  // 클릭한 버튼의 요소
  const button = event.target;
  // 버튼 요소에서 data-age가져오기
  const targetAge = button.dataset.age;
  // targetAge 이상의 유저 배열 생성
  const filterdList = userDataList.filter((data) => data.age >= targetAge);
  // 배열을 출력
  updateList(filterdList);
}

/**
 * 유저 배열을 출력
 */
function updateList(filterdList) {
  let listHtml = '';

  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}세</li>`;
  }

  document.querySelector('.user_list').innerHTML = listHtml;
}
