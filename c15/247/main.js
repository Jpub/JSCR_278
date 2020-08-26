const btnRead = document.querySelector('.btnRead'); // 버튼 요소 가져오기
const btnSave = document.querySelector('.btnSave'); // 버튼 요소 가져오기

// 저장하기 버튼 클릭 시
btnSave.addEventListener('click', () => {
  // 쿠키 저장하기
  document.cookie = 'id=1';
  document.cookie = 'age=30';
  document.cookie = `name=${encodeURIComponent('펭귄')}`;
});

// 불러오기 버튼 클릭 시
btnRead.addEventListener('click', () => {
  // 쿠키 불러오기
  const obj = convertCookieToObject(document.cookie);
  console.log(obj); // 콘솔 출력

  document.querySelector('#log').innerHTML =
    JSON.stringify(obj, null, '  ');
});

/**
 * 쿠키를 객체로 변환
 * @param cookies 쿠키 문자열
 * @return 연관 배열
 */
function convertCookieToObject(cookies) {
  const cookieItems = cookies.split(';');

  const obj = {};
  cookieItems.forEach((item) => {
    // 「 = 」로 분리
    var elem = item.split('=');
    // 키 가져오기
    const key = elem[0].trim();
    // 값 가져오기
    const val = decodeURIComponent(elem[1]);
    // 저장
    obj[key] = val;
  });
  return obj;
}
