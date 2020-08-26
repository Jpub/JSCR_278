function searchUser(targetId) {
  const userList = [
    { id: 1, name: '사자' },
    { id: 2, name: '곰' },
    { id: 3, name: '여우' }
  ];

  // 해당 유저 검색
  const targetUser = userList.find((user) => user.id === targetId);

  // ◎ 데이터가 undefined인 경우 작업 추가
  if (targetUser === undefined) {
    return null;
  }

  return targetUser.name;
}

console.log(searchUser(1)); // 결과: '사자'
console.log(searchUser(4)); // 결과: null