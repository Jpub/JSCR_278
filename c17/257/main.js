/** 50% 확률로 에러를 발생시켜 try, catch 처리 */
function generateError() {
  try {
    // 50% 확률로 에러 발생
    if (Math.random() > 0.5) {
      throw new Error();
    } else {
      console.log('에러 없음');
    }
  } catch (error) {
    // 에러 발생 시 처리
    console.log(`에러 발생`);
  } finally {
    // 에러 발생 여부 상관없이 실행
    console.log('에러 처리가 완료되었습니다.');
    console.log('----------');
  }
}

// 3초마다 generateError( ) 실행
setInterval(generateError, 3000);
