const character = document.querySelector('.character');

character.addEventListener('dragstart', () => {
  console.log('dragstart 이벤트');
});

character.addEventListener('drag', () => {
  console.log('drag 이벤트');
});

character.addEventListener('dragend', () => {
  console.log('dragend 이벤트');
});
