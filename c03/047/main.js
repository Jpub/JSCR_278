1.	// API 등을 통해 가져오는 출력용 데이터 배열 
const userList = [
 { id: 1, name: '곰', address: '서울' },
 { id: 2, name: '여우', address: '대전' },
 { id: 3, name: '사자', address: '부산' }
];

// 컨테이너
const container = document.querySelector('.container');

// userList 배열의 각 요소별 루프 처리
userList.forEach((userData) => {
  // 각 요소 데이터를 쓰기
  container.innerHTML += `
        <div class="card">
          <h2>${userData.name}</h2>
          <p>지역：${userData.address}</p>
        </div>
  `;
});
