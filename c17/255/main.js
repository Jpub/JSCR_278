/** 파라미터 value가 숫자타입이 아닌 경우 에러를 발생시키는 함수  */
function myFunction(value) {
  if (typeof value !== 'number') {
    // 에러 생성
    const error = new Error(`「${value}」는 Number 타입이 아닙니다.`);
    // 에러 내용을 alert( )으로 표시
    alert(error.message);
    // 에러 던지기
    throw error;
  }

  console.log(`「${value}」는 숫자 타입입니다.`);
}

// 함수에 숫자 전달(에러 없음)
myFunction(5);
// 함수에 문자열 전달(에러 발생)
myFunction('사자');
